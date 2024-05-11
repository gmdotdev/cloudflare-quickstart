import '@/styles/global.css';

import clsx from 'clsx';
import { Inter } from 'next/font/google';

const fontFamily = Inter({ subsets: ['latin'], variable: '--font-primary' });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={clsx('bg-gray-950 text-gray-50', fontFamily.variable)}>{children}</body>
    </html>
  );
}
