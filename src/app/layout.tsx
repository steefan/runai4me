import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GoogleAnalytics, MetaPixel } from "@/components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "runai4.me — AI Solutions That Actually Work",
    template: "%s | runai4.me",
  },
  description:
    "I build AI integrations, automations, and intelligent agents that replace spreadsheets, eliminate manual work, and save you money.",
  metadataBase: new URL("https://runai4.me"),
  openGraph: {
    title: "runai4.me — AI Solutions That Actually Work",
    description:
      "I build AI integrations, automations, and intelligent agents that replace spreadsheets, eliminate manual work, and save you money.",
    url: "https://runai4.me",
    siteName: "runai4.me",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <GoogleAnalytics />
        <MetaPixel />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
