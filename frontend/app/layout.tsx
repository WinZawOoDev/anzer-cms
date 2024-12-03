import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/common/header";
import Footer from "@/components/common/footer";
import { inter, nunito_sans, open_sans } from "@/lib/font";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title:
    "ANZER IT Healthcare Asia Comprehensive EHR,EMR, RIS, PACS, LIS, Accounting, and Mobiel Apps solutions",
  description:
    "ANZER IT Healthcare Asia Comprehensive EHR,EMR, RIS, PACS, LIS, Accounting, and Mobiel Apps solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito_sans.className} antialiased `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
