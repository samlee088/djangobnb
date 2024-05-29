import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modals/Modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DjangoBnb",
  description: "Next Django air bnb website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-32">{children}</div>

        <Modal />
      </body>
    </html>
  );
}
