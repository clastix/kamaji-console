import { vanillaAPI } from "@/utils/api";
import { ClientSession } from "../types";
import { AuthMachineContext } from "./provider";
import jwt from "jsonwebtoken";

export function useSession(): ClientSession {
  const ctx = AuthMachineContext.useSelector((state) => state.context);
  if (ctx.status === "authenticated") {
    const token = ctx.tokens?.accessToken!;
    const user = jwt.decode(token) as any;
    return {
      status: "authenticated",
      user: user,
    };
  }

  if (ctx.status === "loading") {
    return {
      status: "loading",
    };
  }

  return {
    status: "unauthenticated",
  };
}

export function useLogin() {
  const { send } = AuthMachineContext.useActorRef();
  const signIn = async (email: string, password: string) => {
    const tokens = await vanillaAPI.auth.login.mutate({
      email,
      password,
    });
    send({ type: "LOGGED", tokens });
  };

  return signIn;
}

export function useSignOut() {
  const { send } = AuthMachineContext.useActorRef();

  const singOut = () => {
    send("LOGOUT");
  };

  return singOut;
}

export function useGetAccessToken() {
  const token = AuthMachineContext.useSelector(
    (state) => state.context.tokens?.accessToken
  );

  return async () => token || null;
}
