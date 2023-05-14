"use client";

import { DialogProvider } from "@/components/ui/dialog";
import { Loading } from "@/components/ui/loading";
import { ToolBarContainer } from "@/components/ui/toolbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { signIn, useSession } from "next-auth/react";
import {
  Suspense,
  useEffect,
  useState,
  type FC,
  type ReactNode,
  useMemo,
} from "react";
import { createCli, reactApi } from "../../../utils/api";
import { SideBar } from "./sidebar";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  const trpcClient = useMemo(() => createCli(), []);
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn();
    }
  }, [status]);

  if (status !== "authenticated") {
    return <Loading />;
  }

  return (
    <reactApi.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <div>
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
        </div>
        <DialogProvider />
        <ToolBarContainer />
      </QueryClientProvider>
    </reactApi.Provider>
  );
};

export default Layout;
