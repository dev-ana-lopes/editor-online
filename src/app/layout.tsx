import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['400', '500', '600']
 });

export const metadata: Metadata = {
  title: "Alura DEV",
  description: "Editor de código online.",
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
