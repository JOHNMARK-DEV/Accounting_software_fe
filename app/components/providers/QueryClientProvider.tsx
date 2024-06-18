
import { QueryClientProvider, QueryClient, Query } from "@tanstack/react-query";
import { useState } from "react";

export const Providers = ({ children }: React.PropsWithChildren) => {
    const [client]  = useState(new QueryClient());
    return ( 
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    )
}