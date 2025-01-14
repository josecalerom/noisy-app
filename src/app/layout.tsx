import type { Metadata } from "next";
import { ChakraProvider } from "@chakra-ui/react";
import { Lato } from "next/font/google"; // I changed the font to the figma project font.
import "./globals.css";

const lato = Lato({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={lato.className}>
                <ChakraProvider>{children}</ChakraProvider>
            </body>
        </html>
    );
}
