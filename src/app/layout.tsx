import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { Toaster } from 'react-hot-toast';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Snippets',
  description: 'Store code snippets.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Toaster position="top-center" />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="p-5 h-screen">
            <div className="flex justify-between items-center">
              <Link href="/">
                <h1 className="text-xl font-bold">Home</h1>
              </Link>
              <ModeToggle />
            </div>
            <main className="flex justify-center items-center h-full">
              <div className="w-full sm:max-w-[500px]">{children}</div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
