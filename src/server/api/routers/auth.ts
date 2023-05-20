import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

const LoginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export const authRouter = createTRPCRouter({
  login: publicProcedure
    .input(LoginSchema)
    .output(
      z.object({
        accessToken: z.string(),
        refreshToken: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const res = await ctx.auth.login(input);
      return res;
    }),
  getSession: publicProcedure.query(async ({ ctx }) => {
    return ctx.session;
  }),
  refreshToken: publicProcedure
    .input(
      z.object({
        refreshToken: z.string(),
      })
    )
    .output(
      z.object({
        accessToken: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const accessToken = await ctx.auth.refreshToken(input.refreshToken);
      return { accessToken };
    }),
});
