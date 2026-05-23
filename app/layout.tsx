import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CT Legado Jiu-Jitsu | Academia de Artes Marciais",
  description:
    "Academia de Jiu-Jitsu focada em formar atletas e pessoas melhores. Venha conhecer o CT Legado e comece sua jornada no tatame.",
  keywords: ["jiu-jitsu", "academia", "artes marciais", "CT Legado", "BJJ"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${inter.className}`}>{children}</body>
    </html>
  );
}
