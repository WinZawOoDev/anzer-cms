import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/common/header";
import Footer from "@/components/common/footer";

import { nuinto, oswald } from "@/lib/font";
import Transition from "./components/common/animation/transition";
import { Toaster } from "@/components/ui/toaster";

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
      <body className={`${nuinto.className} antialiased`}>
        <Header />
        {/* <Transition> */}
        {children}
        {/* </Transition> */}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
