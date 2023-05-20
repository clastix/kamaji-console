"use client";

import { useSession, useSignin } from "@/auth/client";
import { DialogProvider } from "@/components/ui/dialog";
import { Loading } from "@/components/ui/loading";
import { ToolBarContainer } from "@/components/ui/toolbar";
import { Suspense, useEffect, type FC, type ReactNode } from "react";
import { SideBar } from "./sidebar";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const { status } = useSession();
  const signIn = useSignin();

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn();
    }
  }, [status, signIn]);

  if (status !== "authenticated") {
    return <Loading />;
  }

  return (
    <>
      <SideBar />
      <Suspense
        fallback={
          <div className="grid h-full w-full text-center">
            <button className="loading btn-ghost btn"></button>
          </div>
        }
      >
        <div className="flex flex-1 flex-col md:pl-64">{children}</div>
      </Suspense>
      <DialogProvider />
      <ToolBarContainer />
    </>
  );
};

export default Layout;
