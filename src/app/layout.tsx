import type { Metadata } from 'next';
import { Inter, Rajdhani, Oxygen } from 'next/font/google';
import '../app/globals.css';

const oxygen = Oxygen({
  subsets: ['latin'],
  weight: ['400', '700'],
});
export const metadata: Metadata = {
  title: 'Ali',
  description: 'A software developer who loves to cook',
  twitter: {
    title: 'Ali',
    card: 'summary',
    site: '@BiuAli_',
    images: ['/chef-hat(1).png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${oxygen.className} bg-background `}>
        <div>
          {/* Radial gradient for the container to give a faded look */}
          <div></div>
          {children}
        </div>
      </body>
    </html>
  );
}
