import type { Metadata } from "next";
import "./style.scss";

export const metadata: Metadata = {
  title: "Reset password",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
