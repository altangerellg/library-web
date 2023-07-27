import Topbar from "@library/layout/Topbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@library/layout/Header";
import Footer from "@library/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Topbar />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
