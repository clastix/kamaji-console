import { assign, createMachine } from "xstate";

type AuthStatus = "loading" | "authenticated" | "unauthenticated";
type Tokens = {
  accessToken: string;
  refreshToken: string;
};

export const authMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QEMCuAXAFgOgDYHtkIBLAOygGIJ9SxsyA3fAazrSz0JPIUfwGNk6YjQDaABgC6EyYlAAHfLGLCackAA9EAJgAcATmwBWACwA2XWaNmA7LvEmb+gDQgAnol0BGbCf3+bGzMAZgNxG0cAX0jXdhwCIjJKalp6UiZWbDjORJ4+QVVSGVEvWSQQRWVC9S0EM21XDwQvcWCjbH0vL2D9exNg7S9o2Ix4riSKMAAnKfwp7HlcIQAzOYBbLNGc7ihedIEhESKpGXVKlSOanQNjc0trOwcnRsRgqw6jYPF9B20nYK8JhMwxA2TiYFIwgKkAoABkAPIAcXhAFUACqncrnarlWotLztH5mVomIwtfraBruRD6CzYP7aIy6EwGbzafTAmKgrbgyHEaEQbAsCgaWDoIRsZboaYACha4nEAEoKGDRhCoRLBSxMQolBc1LidGYfGZ6rTxNZdMztECXghAsFsLZ9EZOq0FdpgsEQaqsOr+ZrsPxMGB+MwJik6HxMr6Q3yBUGQ2GknsmAUjsUpGc9TjQLV2TYOtoFT0jKY7F67c6nboBiYvL12T9tD6eWr44Hg6Hw+RJjM5gsluhVlMNrH-Qmu8m8vt02ITlmsTnLob7eZfEY9GWbMXGUyq6bsDZvuyT+YvDYhlzxx3pYKpmBlg-YJgIzQo-sY22-bfINgH0+cCvjOaaHPO0iLrqVQrnmiAtHo9IunY-hemWzJVuIZhFua5LeDYrqthwvIane-6Ps+wGUNMszzIsKzrJsRHtiRf4ARRKb5GBxwQWUUH6qQVwIFaPihAC4hWp8AKmnaBiFvhXjFr0pI2G8LbXlsqCkMRAZ3nCSKIgAogAIjqFTLgasEIEYrTYOEVqhNZ3xBJ8dr6KE9I2l8pgtA5V5cqQ+AQHA6hxNm0EWZoiAALRmHaMW2Qq4h7uENr6MWRiEWMuRQGF-GCSYVJNF84jGI8uierSjiODYmWMXGLEQLluaRc0BLYF4Zr1EyZhub1dqONovjssSqF-F6Zi1dpCYsE1MEtR1jodcNjKWL1Jh2kEJVlqSbmXg2aWciMTE-g1ibdkks0RbUJgOLZHKhASFoXnYG3BIWFrmOIgIKVJGXqcd9U6ax5FARdS7hQJq7lSYR6mN4gJmDdAwbSyTpOJudikpSBK1ZpU2apdkOWTuhZlsa1nlS6fguNSCAcjDgSMlYWMAuV0TREAA */
  id: "auth",
  initial: "loading",
  context: {
    status: "loading",
    tokens: null,
  },
  schema: {
    context: {} as {
      status: AuthStatus;
      tokens: Tokens | null;
    },
    events: {} as { type: "LOGGED"; tokens: Tokens } | { type: "LOGOUT" },
    services: {} as {
      loadAuthentication: {
        data: {
          accessToken: string;
          refreshToken: string;
        } | null;
      };
      checkAccessIsNotGoingToExpire: {
        data: boolean;
      };
      refreshToken: {
        data: {
          accessToken: string | null;
        };
      };
    },
  },
  tsTypes: {} as import("./auth.fst.typegen").Typegen0,
  states: {
    loading: {
      entry: [assign({ status: "loading" })],
      invoke: {
        src: "loadAuthentication",
        onDone: [
          {
            target: "authenticated",
            cond: (_, event) => {
              return !!event.data;
            },
            actions: assign((_, event) => {
              return {
                tokens: event.data,
              };
            }),
          },
          {
            target: "unauthenticated",
          },
        ],
        onError: {
          target: "unauthenticated",
        },
      },
    },
    authenticated: {
      on: {
        LOGOUT: "unauthenticated",
      },
      entry: [
        assign({ status: "authenticated" }),
        (ctx) => {
          localStorage.setItem("accessToken", ctx.tokens?.accessToken || "");
          localStorage.setItem("refreshToken", ctx.tokens?.refreshToken || "");
        },
      ],
      initial: "ok",
      states: {
        ok: {
          after: {
            60000: "checking",
          },
        },
        checking: {
          invoke: {
            src: "checkAccessIsNotGoingToExpire",
            onDone: [
              {
                target: "ok",
                cond: (_, event) => {
                  return event.data;
                },
              },
              {
                target: "refreshing",
              },
            ],
            onError: {
              target: "refreshing",
            },
          },
        },
        refreshing: {
          invoke: {
            src: "refreshToken",
            onDone: {
              target: "ok",
              actions: [
                assign((ctx, event) => {
                  console.log(event.data);
                  return {
                    tokens: {
                      refreshToken: ctx.tokens?.refreshToken as string,
                      accessToken: event.data.accessToken as string,
                    },
                  };
                }),
              ],
            },
            onError: "#auth.unauthenticated",
          },
        },
      },
    },
    unauthenticated: {
      entry: [
        assign({ status: "unauthenticated", tokens: null }),
        (ctx) => {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
        },
      ],
      on: {
        LOGGED: {
          target: "authenticated",
          actions: assign((_, event) => {
            return {
              tokens: event.tokens,
            };
          }),
        },
      },
    },
  },
});
