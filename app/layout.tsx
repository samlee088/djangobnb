import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modals/Modal";
import LoginModal from "./components/modals/LoginModal";
import SignUpModal from "./components/modals/SignUpModal";

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
  const content = (
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione incidunt
      aut ut aperiam soluta dolorum ad quas reiciendis vero, amet adipisci
      obcaecati voluptatibus provident sequi voluptatem. Laudantium sint
      aspernatur iusto.
    </p>
  );

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-32">{children}</div>
        <LoginModal />
        <SignUpModal />
      </body>
    </html>
  );
}
