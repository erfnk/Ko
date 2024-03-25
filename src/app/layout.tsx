import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "/fonts/Inter.ttf",
  variable: "--inter",
});

export const metadata: Metadata = {
  title: "Lynxko",
  description: "Lynxko",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
