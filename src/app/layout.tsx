"use client";
import Topbar from "@library/layout/Topbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@library/layout/Header";
import Footer from "@library/layout/Footer";
import Bottombar from "@library/layout/Bottombar";
import { SearchProvider } from "@library/context/SearchContext";
import { usePathname } from "next/navigation";
import { SessionProvider } from "@library/context/SessionContext";
import "@library/utils/interceptor";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    return (
        <html lang="en">
            <body className={inter.className}>
                {pathname.includes("read") ? (
                    children
                ) : (
                    <>
                        <SessionProvider>
                            <Topbar />
                            <SearchProvider>
                                <Header />
                                {children}
                            </SearchProvider>
                            <Footer />
                            <Bottombar />
                        </SessionProvider>
                    </>
                )}
            </body>
        </html>
    );
}
