import type { Metadata } from 'next';
import { Inter, Rajdhani } from 'next/font/google';
import '../app/globals.css';
const rajdhani = Rajdhani({ subsets: ['latin'], weight: ['400', '600'] });

export const metadata: Metadata = {
  title: 'Ali',
  description: 'A software developer who loves to cook',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${rajdhani.className} px-96 bg-slate-900 text-white`}>
        {children}
      </body>
    </html>
  );
}
