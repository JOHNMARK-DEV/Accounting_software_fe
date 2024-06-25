
'use client'
import '@radix-ui/themes/styles.css';
import "@/globals.css";
import ReportNavbar from "@/components/layout/ReportNavbar";
import { Theme } from '@radix-ui/themes';
import { Avatar, Box, Card, Flex, Separator } from "@radix-ui/themes";
import { Providers } from '@/components/providers/QueryClientProvider';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Providers>
        <Theme >
          <div>
            <ReportNavbar />
            <Box className='mt-4'>
              {children}
            </Box>
          </div>
        </Theme>
      </Providers>
    </QueryClientProvider>
  );
}
