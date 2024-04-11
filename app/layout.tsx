import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { StickyTabs } from "./sticky-tabs";
import { Header } from "./header";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-zinc-50 font-sans antialiased",
          fontSans.variable
        )}
      >
        <Header />

        <main>
          <StickyTabs>{children}</StickyTabs>
        </main>
      </body>
    </html>
  );
}