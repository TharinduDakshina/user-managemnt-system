'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import {useEffect, useState} from "react";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {

    const [page, setPage] = useState(1);

    return (
    <html lang="en">
      <head>
        <link rel="icon" type="image" href="/images/favicon.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Navbar page={page}  />
      <div className="flex flex-1">
          <Sidebar setPage={setPage}/>
          <div className="flex-1 p-4">
              {/*<Content/>*/}
              {children}
          </div>
      </div>
      </body>
    </html>
  );
}

