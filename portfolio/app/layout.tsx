'use client'
import { LazyAppProviders } from './../components/LazyAppProviders';
import ScreenResolutionWarning from '@/components/ScreenResolutionWarning';
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ScreenResolutionWarning/>
        <LazyAppProviders>
          <main>{children}</main>
        </LazyAppProviders>
      </body>
    </html>
  );
}
