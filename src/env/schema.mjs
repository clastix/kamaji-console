// @ts-check
import { z } from "zod";

/**
 * Specify your server-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 */
export const serverSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]),
  JWT_SECRET:
    process.env.NODE_ENV === "production"
      ? z.string().min(1)
      : z.string().min(1).default("secret"),
  NEXTAUTH_URL: z.preprocess(
    // This makes Vercel deployments not fail if you don't set NEXTAUTH_URL
    // Since NextAuth.js automatically uses the VERCEL_URL if present.
    (str) => process.env.VERCEL_URL ?? str,
    // VERCEL_URL doesn't include `https` so it cant be validated as a URL
    process.env.VERCEL ? z.string() : z.string().url()
  ),
  // admin user
  ADMIN_EMAIL: z.string().email(),
  ADMIN_PASSWORD: z.string(),
  // sveltos
  SVELTOS_NAMESPACE: z.string().optional(),
  SVELTOS_SECRET_NAME: z.string().optional(),
  SVELTOS_URL: z.string().optional(),
});

/**
 * You can't destruct `process.env` as a regular object in the Next.js
 * middleware, so you have to do it manually here.
 * @type {{ [k in keyof z.infer<typeof serverSchema & typeof clientEnv>]: z.infer<typeof serverSchema & typeof clientEnv>[k] | undefined }}
 */
export const serverEnv = {
  NODE_ENV: process.env.NODE_ENV,
  JWT_SECRET: process.env.JWT_SECRET,
  NEXTAUTH_URL:
    process.env.NEXTAUTH_URL +
    (process.env.NEXT_PUBLIC_BASE_PATH || "") +
    "/api/auth",
  ADMIN_EMAIL: process.env.ADMIN_EMAIL,
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
  SVELTOS_NAMESPACE: process.env.SVELTOS_NAMESPACE,
  SVELTOS_SECRET_NAME: process.env.SVELTOS_SECRET_NAME,
  SVELTOS_URL: process.env.SVELTOS_URL,
};

/**
 * Specify your client-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 * To expose them to the client, prefix them with `NEXT_PUBLIC_`.
 */
export const clientSchema = z.object({
  NEXT_PUBLIC_BASE_PATH: z.string().startsWith("/").optional(),
});

/**
 * You can't destruct `process.env` as a regular object, so you have to do
 * it manually here. This is because Next.js evaluates this at build time,
 * and only used environment variables are included in the build.
 * @type {{ [k in keyof z.infer<typeof clientSchema>]: z.infer<typeof clientSchema>[k] | undefined }}
 */
export const clientEnv = {
  NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH,
};
