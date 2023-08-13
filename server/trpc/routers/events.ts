import { db } from '@/server/database/client';
import { destr } from 'destr';
import { and, eq, like, lte, sql } from 'drizzle-orm';
import { z } from 'zod';
import { event, eventColumns, eventsToTags } from '../../database/schema';
import { publicProcedure, router } from '../trpc';

export const eventsRouter = router({
    findMany: publicProcedure
        .input(
            z
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
                .default({})
        )
        .query(({ input }) =>
            db
                .select({
                    ...eventColumns,
                    tags: sql<string>`JSON_GROUP_ARRAY(${eventsToTags.tag}) FILTER (WHERE ${eventsToTags.tag} IS NOT NULL)`.mapWith(
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
                        input.filters.title
                            ? like(event.title, `%${input.filters.title}%`)
                            : undefined,
                        input.filters.description
                            ? like(event.description, `%${input.filters.description}%`)
                            : undefined,
                        input.filters.country
                            ? eq(event.country, input.filters.country)
                            : undefined,
                        input.filters.city ? eq(event.city, input.filters.city) : undefined,
                        input.filters.after
                            ? sql`${event.date} + COALESCE(${event.durationInSeconds},0) * 1000 >= ${input.filters.after}`
                            : undefined,
                        input.filters.before ? lte(event.date, input.filters.before) : undefined
                    )
                )
                .leftJoin(eventsToTags, eq(eventsToTags.event, event.id))
                .groupBy(event.id)
                .all()
        ),
});
