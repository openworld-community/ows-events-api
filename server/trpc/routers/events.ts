import { db } from '@/server/database/client';
import { like, lte, sql } from 'drizzle-orm';
import { z } from 'zod';
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
        .query(({ input }) => {
            return db.query.event.findMany({
                with: { tags: { columns: { tag: true } } },
                where: (event, { and, eq }) =>
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
                    ),
            });
        }),
});
