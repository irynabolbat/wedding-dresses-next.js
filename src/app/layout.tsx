import React from "react";
import { Slide, ToastContainer } from "react-toastify";
import { StoreProvider } from "@/store/StoreProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";

import { Breadcrumbs } from "./components/Breadcrumbs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.scss";

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
          <div className="container__style">
            <Breadcrumbs />
            {children}
          </div>
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Slide}
          />
        </StoreProvider>
      </body>
    </html>
  );
}
