import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { StoreProvider } from "@/store/StoreProvider";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Breadcrumbs } from "./components/Breadcrumbs";

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
            hideProgressBar={false}
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
