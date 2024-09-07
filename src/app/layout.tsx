import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "./Components/ShadcnComp/components/ui/sonner";
import { ThemeProvider } from "./Components/ShadcnComp/components/theme-provider";
import { createContext, useEffect, useState } from "react";
import { Context } from "./Context";
import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/footer/footer";
import NextTopLoader from 'nextjs-toploader';
import ClientComp from "./Clinet";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500"
});

export const metadata: Metadata = {

  

  
  title: "mosayyebnezhad | personal website",
  manifest: "./manifest.json",
  description: "Protfolio Of mosayyebnezhad 🚀 React developer",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  const Color = "#2299DD"

  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={poppins.className}>
        <NextTopLoader
          color={Color}
          initialPosition={0.08}
          crawlSpeed={200}
          height={5}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow={`0 0 10px ${Color},0 0 5px ${Color}`}

        />
        <Toaster closeButton richColors />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <Context>
            <ClientComp/>
            <Navbar />
            {children}
            <Footer />
          </Context>


        </ThemeProvider>

      </body>
    </html >
  );
}

