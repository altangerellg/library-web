"use client"
import Topbar from "@library/layout/Topbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@library/layout/Header";
import Footer from "@library/layout/Footer";
import Bottombar from "@library/layout/Bottombar";
import { SearchProvider } from "@library/context/SearchContext";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Topbar />
                <SearchProvider>
                    <Header />
                    {children}
                </SearchProvider>
                <Footer />
                <Bottombar/>
            </body>
        </html>
    );
}
