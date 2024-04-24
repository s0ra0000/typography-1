import type { Metadata } from "next";
import { Inter, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const nunito = Nunito_Sans({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Typography",
  description: "Typography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
