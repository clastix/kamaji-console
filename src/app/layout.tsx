"use client";
import { env } from "@/env/client.mjs";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider basePath={`${env.NEXT_PUBLIC_BASE_PATH || ""}/api/auth`}>
      <html>
        <head>
          <Head />
        </head>
        <body>{children}</body>
      </html>
    </SessionProvider>
  );
}

function Head() {
  return (
    <>
      <title>Clastix Dashboard</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/apple-icon-57x57.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/apple-icon-60x60.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/apple-icon-72x72.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/apple-icon-76x76.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href={`${
          process.env.NEXT_PUBLIC_BASE_PATH || ""
        }/apple-icon-114x114.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href={`${
          process.env.NEXT_PUBLIC_BASE_PATH || ""
        }/apple-icon-120x120.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href={`${
          process.env.NEXT_PUBLIC_BASE_PATH || ""
        }/apple-icon-144x144.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href={`${
          process.env.NEXT_PUBLIC_BASE_PATH || ""
        }/apple-icon-152x152.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${
          process.env.NEXT_PUBLIC_BASE_PATH || ""
        }/apple-icon-180x180.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href={`${
          process.env.NEXT_PUBLIC_BASE_PATH || ""
        }/android-icon-192x192.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon-96x96.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon-16x16.png`}
      />
      <link
        rel="manifest"
        href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/manifest.json`}
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content={`${
          process.env.NEXT_PUBLIC_BASE_PATH || ""
        }/ms-icon-144x144.png`}
      />
      <meta name="theme-color" content="#ffffff" />
    </>
  );
}
