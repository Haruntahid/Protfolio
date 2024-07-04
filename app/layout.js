import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReturnToTop from "@/components/ReturnToTop";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "haruntahid",
  description: "Created by haruntahid",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <Header />
        {children}
        <Footer />
        <ReturnToTop />
      </body>
    </html>
  );
}
