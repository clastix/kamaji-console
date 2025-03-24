// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  output: "standalone",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard/tcps",
        permanent: true,
      },
    ];
  },
};

export default config;
