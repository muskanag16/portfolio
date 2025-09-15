import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/main/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aryan Gupta",
  description: "Explore Aryan's portfolio featuring full stack projects, innovative web apps, and creative solutions using Next.js, React, TypeScript, and more.",
  icons: {
    icon : { url: "/favicon.png", sizes: "32x32", type: "image/png" }
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-y-scroll overflow-x-hidden`}
      >
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
