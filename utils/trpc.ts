import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import type { AppRouter } from '@/server/trpc/routers';

export type TrpcInputs = inferRouterInputs<AppRouter>;
export type TrpcOutputs = inferRouterOutputs<AppRouter>;
