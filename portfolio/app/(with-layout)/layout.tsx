// MAC OS SIDE LAYOUT
'use client'

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./../globals.css";
import TopBarComponent from "@/components/TopBarComponent";
import ApplicationBarComponent from "@/components/ApplicationsBarComponent"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    <main>
      <header>
        <TopBarComponent />
      </header>
        {children}
      <footer>
        <ApplicationBarComponent />
      </footer>
    </main>
    </body>
  </html>
);
}