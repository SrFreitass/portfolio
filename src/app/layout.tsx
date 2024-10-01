
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plus_Jakarta_Sans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Freitas portfolio",
  description: "Olá, seja bem-vindo ao meu portfólio",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plus_Jakarta_Sans.className} min-h-screen p-8 mt-6`}>{children}</body>
    </html>
  );
}
