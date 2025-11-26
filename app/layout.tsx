import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adhil Kumar | AI & Robotics Enthusiast",
  description: "Portfolio of Adhil Kumar - AI & Robotics Enthusiast designing intelligent systems.",
};

import { Navbar } from "@/components/sections/navbar"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-black text-white`} suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
