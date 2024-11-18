import type { Metadata } from "next";
import "./style.scss";

export const metadata: Metadata = {
  title: "Registration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
