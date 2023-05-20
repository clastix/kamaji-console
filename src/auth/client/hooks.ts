import { vanillaAPI, reactApi } from "@/utils/api";
import { ClientSession } from "../types";
import { useRouter, usePathname } from "next/navigation";

export function useSession(): ClientSession {
  const q = reactApi.auth.getSession.useQuery();
  if (q.status === "loading") {
    return {
      status: "loading",
    };
  }

  if (q.status === "error") {
    return {
      status: "unauthenticated",
    };
  }

  return q.data;
}

export function useRefreshToken() {
  return async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) {
      return undefined;
    }
    if (isTokenExpired(refreshToken)) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      return undefined;
    }
    try {
      const m = await vanillaAPI.auth.refreshToken.mutate({
        refreshToken,
      });
      localStorage.setItem("accessToken", m.accessToken);
      return m.accessToken;
    } catch (e) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      return undefined;
    }
  };
}

export function useGetAccessToken() {
  const refreshToken = useRefreshToken();
  return async () => {
    const token = localStorage.getItem("accessToken");
    if (!token || isTokenExpired(token)) {
      const refToken = await refreshToken();
      if (!refToken) {
        return null;
      }
      return localStorage.getItem("accessToken");
    }
    return token;
  };
}

export function useLogin() {
  const router = useRouter();
  const utils = reactApi.useContext();
  const m = reactApi.auth.login.useMutation({
    onSuccess: async (data) => {
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      await utils.auth.invalidate();
      router.push("/");
    },
  });

  return m.mutateAsync;
}

export function useSignOut() {
  const router = useRouter();
  return async () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    router.push("/auth/signin");
  };
}

export function useSignIn() {
  const session = useSession();
  const router = useRouter();
  const pathname = usePathname();

  return () => {
    if (session.status === "unauthenticated") {
      router.push("/auth/signin?callbackUrl=" + pathname);
    }
  };
}

function isTokenExpired(token: string): boolean {
  const base64Url = token.split(".")[1];
  if (!base64Url) {
    return true;
  }
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  const { exp } = JSON.parse(jsonPayload);
  const expired = Date.now() >= exp * 1000;
  return expired;
}
