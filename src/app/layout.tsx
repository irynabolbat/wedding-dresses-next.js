import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { StoreProvider } from "@/store/StoreProvider";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BRIDE'S CHARM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        suppressHydrationWarning={true}
      >
        <StoreProvider>
          <Header />
          <div className="container__style">{children}</div>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
