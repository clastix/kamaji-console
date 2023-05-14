import { TRPCError } from "@trpc/server";
import { HttpError } from "../../gen/api";

export function isHTTPErr(err: unknown): err is HttpError {
  return (
    typeof err === "object" &&
    err !== null &&
    "name" in err &&
    err.name === "HttpError"
  );
}

export function handleKubernetesError(err: unknown) {
  if (isHTTPErr(err)) {
    return new TRPCError({
      code: "BAD_REQUEST",
      cause: err.body,
      message: err.body?.message as string,
    });
  }
  return err;
}
