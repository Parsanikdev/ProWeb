import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "./Components/ShadcnComp/components/ui/sonner";
import { ThemeProvider } from "./Components/ShadcnComp/components/theme-provider";
import { createContext, useState } from "react";
import { Context } from "./Context";
import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/footer/footer";
import NextTopLoader from 'nextjs-toploader';



const poppins = Poppins({
  subsets: ["latin"],
  weight: "500"
});

export const metadata: Metadata = {
  title: "mosayyebnezhad | personal website",
  
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
            <Navbar />
            {children}
            <Footer />
          </Context>


        </ThemeProvider>

      </body>
    </html >
  );
}

