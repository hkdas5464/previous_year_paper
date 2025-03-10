import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import MyNavbar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Self Study",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
     
    <head />
    
    <body className="z-0">
      {/* <ThemeProvider><MyNavbar/></ThemeProvider> */}
      <ThemeProvider>{children}</ThemeProvider>
    </body>
  </html>

  );
}
