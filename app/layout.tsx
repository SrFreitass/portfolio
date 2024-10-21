
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plus_Jakarta_Sans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Olá! Eu sou o Guilherme Freitas. Seja bem vindo ao meu portfolio.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plus_Jakarta_Sans.className}>{children}</body>
    </html>
  );
}
