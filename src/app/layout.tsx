import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from '@/contexts/LanguageContext';

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TRWATT - VOLTGO Yetkili Bayisi | Elektrikli Araç Şarj Çözümleri",
  description: "VOLTGO'nun yetkili bayisi TRWATT ile elektrikli araç şarj çözümlerini keşfedin. DC hızlı şarj, AC şarj istasyonları ve Wallbox çözümleri.",
  keywords: "voltgo, elektrikli araç şarj, şarj istasyonu, dc şarj, elektrikli araç, şarj cihazı, bayi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
        {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
