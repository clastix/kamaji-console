import { env } from "@/env/client.mjs";
import { usePathname, useRouter } from "next/navigation";

export type { User, ClientSession } from "../types";
export { AuthProvider } from "./provider";
export { useGetAccessToken, useLogin, useSignOut, useSession } from "./hooks";

export function useSignIn() {
  const router = useRouter();
  let pathname = usePathname();
  if (
    env.NEXT_PUBLIC_BASE_PATH &&
    pathname?.startsWith(env.NEXT_PUBLIC_BASE_PATH)
  ) {
    pathname = pathname.replace(env.NEXT_PUBLIC_BASE_PATH, "");
  }

  return () => {
    if (!pathname?.startsWith("/auth/signin")) {
      router.push(`/auth/signin?callbackUrl=${pathname}`);
    }
  };
}
