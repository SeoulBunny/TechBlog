import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

import Navbar from "@/_components/general/navbar/Navbar";
import Footer from "@/_components/general/footer/page";
import SignInModal from "@/_components/modals/SignInModal";
import SearchModal from "@/_components/modals/SearchModal";
import QueryProvider from "./providers/QueryProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Blogger",
  description: "Discover something new",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-background`}>
        <QueryProvider>
          <Navbar />
          {children}
          <Footer />
          <SignInModal />
          <SearchModal />
          <Toaster />
        </QueryProvider>
      </body>
    </html>
  );
}
