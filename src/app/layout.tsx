import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VoltGo Bayi - Elektrikli Araç Şarj Çözümleri",
  description: "VoltGo'nun yetkili bayisi olarak elektrikli araç şarj cihazları ve istasyonları konusunda profesyonel çözümler sunuyoruz. DC şarj, süper hızlı şarj ve ayrık üniteli şarj sistemleri.",
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
        {children}
      </body>
    </html>
  );
}
