'use client'
import * as React from "react";
import { usePathname } from 'next/navigation';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {HeroUIProvider} from "@heroui/react";
import './globals.css'
import ClientLayout from "@/components/navbar/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><ClientLayout><HeroUIProvider>{children}</HeroUIProvider></ClientLayout>
        
      </body>
    </html>
  );
}
