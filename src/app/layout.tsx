import type { Metadata } from 'next';
/* eslint-disable-next-line camelcase */
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Sidebar } from './components/Sidebar';
import { HeaderMobile } from './components/HeaderMobile';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Freitas portfolio',
  description: 'Olá, seja bem-vindo ao meu portfólio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${plusJakartaSans.className} min-h-screen !p-8 !mt-6`}>
        <div className="flex gap-20 max-xl:flex-col max-xl:gap-0">
          <Sidebar />
          <HeaderMobile />
          {children}
        </div>
      </body>
    </html>
  );
}
