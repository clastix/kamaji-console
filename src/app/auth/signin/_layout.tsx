"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useMemo, useState, type FC, type ReactNode } from "react";
import { createCli, reactApi } from "../../../utils/api";
import { useGetAccessToken } from "@/auth/client/hooks";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  const getToken = useGetAccessToken();
  const trpcClient = useMemo(() => createCli(getToken), [getToken]);

  return (
    <reactApi.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </reactApi.Provider>
  );
};

export default Layout;
