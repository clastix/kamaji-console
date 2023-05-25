import { vanillaAPI } from "@/utils/api";
import { createActorContext } from "@xstate/react";
import { authMachine } from "./auth.fst";

export const AuthMachineContext = createActorContext(authMachine);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <AuthMachineContext.Provider
      options={{
        services: {
          checkAccessIsNotGoingToExpire: async (ctx) => {
            if (!ctx.tokens?.accessToken) {
              return false;
            }
            return !isTokenExpiringIn(ctx.tokens.accessToken, 60);
          },
          loadAuthentication: async () => {
            const refreshToken = await loadRefreshTokenFromStorage();
            if (!refreshToken) {
              return null;
            }
            const accessToken = await loadAccessTokenOrRefresh(refreshToken);
            if (!accessToken) {
              return null;
            }
            return {
              accessToken,
              refreshToken,
            };
          },
          refreshToken: async (ctx) => {
            const accessToken = await refreshToken(ctx.tokens?.refreshToken);
            return {
              accessToken,
            };
          },
        },
      }}
    >
      {children}
    </AuthMachineContext.Provider>
  );
}

async function loadRefreshTokenFromStorage() {
  const refToken = localStorage.getItem("refreshToken");
  if (!checkToken(refToken)) {
    return null;
  }
  return refToken;
}

async function loadAccessTokenOrRefresh(refrToken: string) {
  let token = localStorage.getItem("accessToken");
  if (checkToken(token)) {
    return token;
  }
  token = await refreshToken(refrToken);
  if (!token) {
    return null;
  }
  return token;
}

function checkToken(token: string | undefined | null): token is string {
  if (!token) {
    return false;
  }
  return !isTokenExpired(token);
}

async function refreshToken(refreshToken: string | undefined | null) {
  if (!refreshToken || isTokenExpired(refreshToken)) {
    return null;
  }
  try {
    const m = await vanillaAPI.auth.refreshToken.mutate({
      refreshToken,
    });
    return m.accessToken;
  } catch (e) {
    return null;
  }
}

function isTokenExpired(token: string): boolean {
  return isTokenExpiringIn(token, 0);
}

function isTokenExpiringIn(token: string, secs: number): boolean {
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
  const expired = Date.now() >= (exp - secs) * 1000;
  return expired;
}
