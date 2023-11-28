import { Inter } from "next/font/google";
import React from "react";
const inter = Inter({ subsets: ["latin"] });
import "./globals.css";
import { AppToast } from "@/packages";
import StoreProvider from "@/redux/StoreProvider";
import { makeStore } from "@/redux/store";
import { Providers } from "./providers";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
          <AppToast />
        </Providers>
      </body>
    </html>
  );
}
