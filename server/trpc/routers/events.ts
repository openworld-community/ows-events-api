import { z } from 'zod';
import { db } from '@/server/database/client';
import { event } from '@/server/database/schema';
import { publicProcedure, router } from '../trpc';

export const eventsRouter = router({
    findMany: publicProcedure
        .input(z.object({ count: z.number().int().positive() }).partial().optional())
        .query(() => {
            return db.select().from(event).all();
        })
});
