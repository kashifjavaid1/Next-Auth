import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Authprovider from "./Provider";

const lexend = Lexend({ subsets: ["latin"] });

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
      <body className={lexend.className}>
        <Authprovider>{children}</Authprovider>
      </body>
    </html>
  );
}
