"use client";

import ANIMODEVLOGO from "@/public/animo-dev-logo.jpg";
import {
    ArrowUp,
    Code,
    Folder,
    HelpCircle,
    Mail,
    Menu,
    Star,
    Users,
    X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useIsTablet } from "@/lib/use-isTablet";

const BASE_HEADER_CLASSNAME =
    "bg-secondary h-[3rem] py-2 px-4 border-retro-y relative z-50";

interface HeaderProps {
    className?: string;
}

const Header = () => {
    const isTablet = useIsTablet();

    if (!isTablet) return <DesktopHeader className="grid grid-cols-[auto_1fr_auto] items-center " />;
    return <MobileHeader className="flex items-center justify-between " />;
};

export default Header;

const MobileHeader: React.FC<HeaderProps> = ({ className }) => {
    const [showSidebar, setShowSidebar] = useState(false);
    const toggleSidebar = () => setShowSidebar((prev) => !prev);

    useEffect(() => {
        // turn of window scrolling when sidebar is open
        const disableWindowScrolling = () => {
            if (showSidebar) {
                document.body.style.overflow = "hidden";
            }
        };

        disableWindowScrolling();

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showSidebar]);

    return (
        <header className={`${BASE_HEADER_CLASSNAME} ${className}`}>
            {/* LEFT SECTION */}
            <section className="flex items-center gap-2">
                <Image
                    src={ANIMODEVLOGO}
                    alt="Animo Dev Logo"
                    width={30}
                    height={30}
                    className="border-retro border-black"
                />
                <p className="font-bold">ANIMO.DEV</p>
            </section>

            {/* RIGHT SECTION */}
            <button onClick={toggleSidebar} className="p-1">
                <Menu />
            </button>

            {/* SIDEBAR + OVERLAY */}
            <AnimatePresence>
                {showSidebar && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            className="fixed inset-0 bg-black/40 z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={toggleSidebar}
                        />

                        {/* Sidebar */}
                        <motion.aside
                            className="fixed top-0 right-0 h-full w-full bg-primary shadow-xl border-retro z-50 flex flex-col justify-between"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 30,
                            }}
                        >
                            {/* main content  */}
                            <section>
                                <div className="flex justify-between items-center py-[0.57rem] px-4 border-b-4">
                                    <div className="flex items-center gap-2">
                                        <Image
                                            src={ANIMODEVLOGO}
                                            alt="Animo Dev Logo"
                                            width={30}
                                            height={30}
                                            className="border-retro border-black"
                                        />
                                        <p className="font-bold">ANIMO.DEV</p>
                                    </div>

                                    <button onClick={toggleSidebar}>
                                        <X />
                                    </button>
                                </div>
                                <ul className="p-4 space-y-6 font-medium">
                                    <li className="hover:text-primary cursor-pointer flex items-center gap-3">
                                        <Code /> Our Works
                                    </li>
                                    <li className="hover:text-primary cursor-pointer flex items-center gap-3">
                                        <Users /> The Team
                                    </li>
                                    <li className="hover:text-primary cursor-pointer flex items-center gap-3">
                                        <Folder /> Future Projects
                                    </li>
                                    <li className="hover:text-primary cursor-pointer flex items-center gap-3">
                                        <Star /> Featured
                                    </li>
                                    <li className="hover:text-primary cursor-pointer flex items-center gap-3">
                                        <HelpCircle /> Frequently Asked
                                        Questions
                                    </li>
                                    <li className="hover:text-primary cursor-pointer flex items-center gap-3">
                                        <Mail /> Reach Out
                                    </li>
                                    <li className="hover:text-primary cursor-pointer flex items-center gap-3">
                                        <ArrowUp /> Back to Top
                                    </li>
                                </ul>
                            </section>
                            {/* credits below  */}
                            <section className="flex flex-col items-center justify-end ">
                                <p className="opacity-50">
                                    &copy; {new Date().getFullYear()} Animo.Dev.
                                    All rights reserved.
                                </p>
                            </section>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

const DesktopHeader: React.FC<HeaderProps> = ({ className }) => {
    return (
        <header className={`${BASE_HEADER_CLASSNAME} ${className}`}>
            {/* left section */}
            <section className="flex items-center gap-2">
                <Image
                    src={ANIMODEVLOGO}
                    alt="Animo Dev Logo"
                    width={30}
                    height={30}
                    className="border-retro border-black"
                />
                <p className="font-bold">ANIMO.DEV</p>
            </section>

            {/* center */}
            <section className="flex justify-center overflow-hidden">
                <ul className="flex items-center gap-10 font-medium whitespace-nowrap">
                    <li>Our Works</li>
                    <li>The Team</li>
                    <li>Future Projects</li>
                    <li>Featured</li>
                    <li>FAQs</li>
                    <li>Reach Out</li>
                </ul>
            </section>

            {/* right section */}
            <section className="flex justify-end">
                <button className="font-semibold hover:underline">
                    Back to Top
                </button>
            </section>
        </header>
    );
};
