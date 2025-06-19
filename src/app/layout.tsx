import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { loadLPData } from '@/lib/lp-loader';
import { LPProvider } from '@/contexts/LPContext';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata(): Promise<Metadata> {
  const lpData = await loadLPData();

  return {
    title: lpData.metadata.title,
    description: lpData.metadata.description,
    icons: {
      icon: lpData.metadata.favicon || '/favicon.ico',
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lpData = await loadLPData();

  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <LPProvider data={lpData}>{children}</LPProvider>
      </body>
    </html>
  );
}
