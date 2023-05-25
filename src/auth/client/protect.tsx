"use client";
import { Loading } from "@/components/ui/loading";
import { useSession } from "./hooks";
import { ReactNode, useEffect } from "react";
import { useSignIn } from ".";

export function ProtectAuth({ children }: { children: ReactNode }) {
  const { status } = useSession();
  const signIn = useSignIn();

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn();
    }
  }, [status, signIn]);

  if (status === "authenticated") {
    return <>{children}</>;
  }

  return <Loading />;
}
