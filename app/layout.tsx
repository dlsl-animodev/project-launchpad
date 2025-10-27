import SmoothScroll from "@/components/smooth-scroll";
import type { Metadata } from "next";
import { Pacifico, Inter, Rubik } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const gtProelium = localFont({
    src: [
        {
            path: "../public/fonts/gt_proelium/GTProelium.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/gt_proelium/GTProeliumItalic.otf",
            weight: "400",
            style: "italic",
        },
        {
            path: "../public/fonts/gt_proelium/GTProeliumSharp.otf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../public/fonts/gt_proelium/GTProeliumSharpItalic.otf",
            weight: "700",
            style: "italic",
        },
    ],
    variable: "--font-gtproelium",
    display: "swap",
});

// removed Poppins and Boldonse per request

const pacifico = Pacifico({
    variable: "--font-pacifico",
    subsets: ["latin"],
    weight: "400",
    display: "swap",
});


const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display: "swap",
});

const rubik = Rubik({
    variable: "--font-rubik",
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "ANIMO.DEV",
    description:
        "The official ANIMO.DEV website together with the community! Containing what our organization is all about, who we are, our projects, and updates with our event schedule to see what is coming next, and so much more! The website will be open and accessible to everyone.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${pacifico.variable} ${gtProelium.variable} ${inter.variable} ${rubik.variable}`}
            >
                <SmoothScroll>{children}</SmoothScroll>
            </body>
        </html>
    );
}
