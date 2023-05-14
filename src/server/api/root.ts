import { createTRPCRouter } from "./trpc";
import { k8sRouter } from "./routers/k8s";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  k8s: k8sRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
