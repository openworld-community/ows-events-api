import { db } from '@/server/database/client';
import { destr } from 'destr';
import { and, eq, like, lte, sql } from 'drizzle-orm';
import { z } from 'zod';
import { event, eventsToTags } from '../../database/schema';
import { publicProcedure, router } from '../trpc';

const findManyInputSchema = z
    .object({
        filters: z
            .object({
                /** Filter if title contains specified string */
                title: z.string().optional(),
                /** Filter if description contains specified string */
                description: z.string().optional(),
                /** Filter by country */
                country: z.string().optional(),
                /** Filter by city */
                city: z.string().optional(),
                /** Filter if event will be active after specified date(timestamp in ms) */
                after: z.number().int().min(0).optional(),
                /** Filter if event was active before specified date(timestamp in ms) */
                before: z.number().int().min(0).optional(),
            })
            .optional()
            .default({}),
    })
    .optional()
    .default({});

export const eventsRouter = router({
    findMany: publicProcedure.input(findManyInputSchema).query(
        ({
            input: {
                filters: { after, before, city, country, description, title },
            },
        }) =>
            db
                .select({
                    event,
                    tags: sql<string>`JSON_GROUP_ARRAY(${eventsToTags.tagName}) FILTER (WHERE ${eventsToTags.tagName} IS NOT NULL)`.mapWith(
                        (x) => {
                            try {
                                return destr<string[]>(x, { strict: true });
                            } catch (e) {
                                console.error(e);
                                return [];
                            }
                        }
                    ),
                })
                .from(event)
                .where(
                    and(
                        title ? like(event.title, `%${title}%`) : undefined,
                        description ? like(event.description, `%${description}%`) : undefined,
                        country ? eq(event.country, country) : undefined,
                        city ? eq(event.city, city) : undefined,
                        after
                            ? sql`${event.date} + COALESCE(${event.durationInSeconds},0) * 1000 >= ${after}`
                            : undefined,
                        before ? lte(event.date, before) : undefined
                    )
                )
                .leftJoin(eventsToTags, eq(eventsToTags.eventId, event.id))
                .groupBy(event.id)
                .all()
    ),
});
