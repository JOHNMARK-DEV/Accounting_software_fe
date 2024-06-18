
'use client'
import '@radix-ui/themes/styles.css';
import "@/globals.css";
import Navbar from "@/components/layout/Navbar";
import { Theme } from '@radix-ui/themes';
import { Avatar, Box, Card, Flex, Separator } from "@radix-ui/themes";
import { Providers } from '@/components/providers/QueryClientProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <Theme >
        <div style={{maxWidth: '1333px', margin: 'auto' }}>
          <Navbar />
          <Box className='mt-4'>
            {children}
          </Box>
        </div>
      </Theme> 
    </Providers>
  );
}
