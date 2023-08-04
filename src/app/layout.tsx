"use client";
import Topbar from "@library/layout/Topbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@library/layout/Header";
import Footer from "@library/layout/Footer";
import Bottombar from "@library/layout/Bottombar";
import { SearchProvider } from "@library/context/SearchContext";
<<<<<<< HEAD
import { SessionProvider } from "@library/context/SessionContext";

=======
import { usePathname } from "next/navigation";
>>>>>>> 8e4abd48d508c1c82eceafdbaddbf7a9e1ea734a
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    return (
        <html lang="en">
            <body className={inter.className}>
<<<<<<< HEAD
                <SessionProvider>
                <Topbar />
                <SearchProvider>
                    <Header />
                    {children}
                </SearchProvider>
                <Footer />
                <Bottombar/>
                </SessionProvider>
=======
                {pathname.includes("read") ? (
                    <div>{children}</div>
                ) : (
                    <>
                        <Topbar />
                        <SearchProvider>
                            <Header />
                            {children}
                        </SearchProvider>
                        <Footer />
                        <Bottombar />
                    </>
                )}
>>>>>>> 8e4abd48d508c1c82eceafdbaddbf7a9e1ea734a
            </body>
        </html>
    );
}
