// src/app/client-wrapper.tsx
"use client";

import { createCli, reactApi } from "@/utils/api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { AuthProvider } from "@/auth/client/provider";

// Create this component separately to avoid the context issue
function TrpcProvider({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(() => new QueryClient());
    // Import and use the hook here after AuthProvider is available
    const getToken = useGetAccessToken();
    const trpcClient = useMemo(() => createCli(getToken), [getToken]);

    return (
        <reactApi.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </reactApi.Provider>
    );
}

// Import this at the top once TrpcProvider is defined
import { useGetAccessToken } from "@/auth/client/hooks";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    return (
        <AuthProvider>
            <TrpcProvider>{children}</TrpcProvider>
        </AuthProvider>
    );
}