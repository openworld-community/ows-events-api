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
                            /** Filter if event will be active after specified date(timestamp in ms) */
                            after: z.number().int().min(0).optional(),
                            /** Filter if event was active before specified date(timestamp in ms) */
                            before: z.number().int().min(0).optional()
                        })
                        .optional()
                        .default({})
                })
                .optional()
                .default({})
        )
        .query(({ input }) => {
            return db.query.event.findMany({
                with: { tags: { columns: { tag: true } } },
                where: (event, { and }) =>
                    and(
                        input.filters.title
                            ? like(event.title, `%${input.filters.title}%`)
                            : undefined,
                        input.filters.after
                            ? sql`${event.date} + COALESCE(${event.durationInSeconds},0) * 1000 >= ${input.filters.after}`
                            : undefined,
                        input.filters.before ? lte(event.date, input.filters.before) : undefined
                    )
            });
        })
});
