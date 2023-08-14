import { router } from '../trpc';
import { eventsRouter } from './events';
export const appRouter = router({ event: eventsRouter });

export type AppRouter = typeof appRouter;
