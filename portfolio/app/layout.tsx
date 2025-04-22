'use client'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LazyAppProviders } from './../components/LazyAppProviders';
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LazyAppProviders>
          <main>{children}</main>
        </LazyAppProviders>
      </body>
    </html>
  );
}
