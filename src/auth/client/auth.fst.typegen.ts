// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "done.invoke.auth.authenticated.checking:invocation[0]": {
      type: "done.invoke.auth.authenticated.checking:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "done.invoke.auth.authenticated.refreshing:invocation[0]": {
      type: "done.invoke.auth.authenticated.refreshing:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "done.invoke.auth.loading:invocation[0]": {
      type: "done.invoke.auth.loading:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "error.platform.auth.authenticated.checking:invocation[0]": {
      type: "error.platform.auth.authenticated.checking:invocation[0]";
      data: unknown;
    };
    "xstate.after(60000)#auth.authenticated.ok": {
      type: "xstate.after(60000)#auth.authenticated.ok";
    };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    checkAccessIsNotGoingToExpire: "done.invoke.auth.authenticated.checking:invocation[0]";
    loadAuthentication: "done.invoke.auth.loading:invocation[0]";
    refreshToken: "done.invoke.auth.authenticated.refreshing:invocation[0]";
  };
  missingImplementations: {
    actions: never;
    delays: never;
    guards: never;
    services:
      | "checkAccessIsNotGoingToExpire"
      | "loadAuthentication"
      | "refreshToken";
  };
  eventsCausingActions: {};
  eventsCausingDelays: {};
  eventsCausingGuards: {};
  eventsCausingServices: {
    checkAccessIsNotGoingToExpire: "xstate.after(60000)#auth.authenticated.ok";
    loadAuthentication: "xstate.init";
    refreshToken:
      | "done.invoke.auth.authenticated.checking:invocation[0]"
      | "error.platform.auth.authenticated.checking:invocation[0]";
  };
  matchesStates:
    | "authenticated"
    | "authenticated.checking"
    | "authenticated.ok"
    | "authenticated.refreshing"
    | "loading"
    | "unauthenticated"
    | { authenticated?: "checking" | "ok" | "refreshing" };
  tags: never;
}
