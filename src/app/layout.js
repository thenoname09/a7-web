import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import Providers from "@/app/lib";
import Footer from "@/components/shared/Footer";
import { ToastContainer } from "react-toastify";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KeenKeeper",
  description: "KeenKeeper is a modern relationship management web app designed to help you stay connected with the people who matter most. It allows users to track interactions, monitor relationship health, and maintain meaningful connections through a simple and intuitive interface",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"  data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    > 
      <body className="min-h-full flex flex-col">
       <Providers>
        <Navbar></Navbar>
        <main className="bg-[#F8FAFC]">
          {children}
           <ToastContainer />
        </main>
      <Footer></Footer>
       </Providers>
      </body>
    
    </html>
  );
}
