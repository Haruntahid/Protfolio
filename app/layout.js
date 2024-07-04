import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReturnToTop from "@/components/ReturnToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "haruntahid",
  description: "Created by haruntahid",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <ReturnToTop />
      </body>
    </html>
  );
}
