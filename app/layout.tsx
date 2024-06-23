import Navbar from "@/components/Header";
import ReduxProvider from "@/providers/ReduxProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Aero Tix | Home",
    description: "Air ticket booking app"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ReduxProvider>
                    <Navbar />

                    {children}
                </ReduxProvider>
            </body>
        </html>
    );
}
