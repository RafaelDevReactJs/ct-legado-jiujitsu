import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CT Legado Jiu-Jitsu | Academia de Artes Marciais",
  description:
    "Academia de Jiu-Jitsu focada em formar atletas e pessoas melhores. Venha conhecer o CT Legado e comece sua jornada no tatame.",
  keywords: ["jiu-jitsu", "academia", "artes marciais", "CT Legado", "BJJ"],
  icons: {
    icon: "/assets/Bruto.svg",
    shortcut: "/assets/Bruto.svg",
    apple: "/assets/Bruto.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${oswald.variable} ${inter.className}`}>{children}</body>
    </html>
  );
}
