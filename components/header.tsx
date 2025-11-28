"use client";

import ANIMODEVLOGO from "@/public/animo-dev-logo.jpg";
import {
    ArrowUp,
    Code,
    Folder,
    HelpCircle,
    Menu,
    Star,
    Users,
    X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SECTION_IDS } from "@/lib/scroll-into-view-ids";
import { useIsTablet } from "@/lib/use-isTablet";

const BASE_HEADER_CLASSNAME =
    "bg-secondary h-[3rem] py-2 px-4 border-retro-b w-full fixed z-50 font-righteous font-normal tracking-wide";

const HEADER_NAVS = [
    { label: "Our Works", icon: <Code />, scrollId: SECTION_IDS.OUR_WORKS },
    {
        label: "The Team",
        icon: <Users />,
        scrollId: SECTION_IDS.MEET_THE_TEAM,
    },
    {
        label: "Future Projects",
        icon: <Folder />,
        scrollId: SECTION_IDS.FUTURE_PROJECTS,
    },
    {
        label: "Featured",
        icon: <Star />,
        scrollId: SECTION_IDS.BE_FEATURED,
    },
    {
        label: "Frequently Asked Questions",
        icon: <HelpCircle />,
        scrollId: SECTION_IDS.FAQS,
    },
    { label: "Back to Top", icon: <ArrowUp />, scrollId: "back-to-top" },
];

interface HeaderProps {
    className?: string;
}

const Header = () => {
    const isTablet = useIsTablet();
    const [ready, setReady] = useState(false);

    useEffect(() => {
        // Defer to next frame so initial styles paint before we transition
        const id = requestAnimationFrame(() => setReady(true));
        return () => cancelAnimationFrame(id);
    }, []);

    if (!ready) return null;

    if (!isTablet)
        return (
            <DesktopHeader className="grid grid-cols-[auto_1fr_auto] items-center " />
        );
    return <MobileHeader className="flex items-center justify-between " />;
};

export default Header;

const handleScrollIntoView = (
    id: string,
    topControl: number,
    behavior?: ScrollBehavior
) => {
    const element = document.getElementById(id);
    if (element) {
        const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition + topControl;

        window.scrollTo({
            top: offsetPosition,
            behavior: behavior || "smooth",
        });
    }
};

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
        <motion.header
            className={`${BASE_HEADER_CLASSNAME} ${className}`}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
            {/* LEFT SECTION */}
            <section className="flex items-center gap-2">
                <Image
                    src={ANIMODEVLOGO}
                    alt="Animo Dev Logo"
                    width={30}
                    height={30}
                    className="border-retro border-black"
                />
                <p>ANIMO.DEV</p>
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
                            className="fixed top-0 right-0 h-full w-full bg-primary border-retro z-50 flex flex-col justify-between"
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
                                    {HEADER_NAVS.map((nav) => (
                                        <li
                                            key={nav.label}
                                            className="flex items-center gap-4 hover:underline"
                                            onClick={() => {
                                                toggleSidebar();
                                                if (
                                                    nav.scrollId ===
                                                    "back-to-top"
                                                ) {
                                                    window.scrollTo({
                                                        top: 0,
                                                        behavior: "instant",
                                                    });
                                                } else {
                                                    let topControl = 0;

                                                    if (
                                                        nav.scrollId ===
                                                            SECTION_IDS.OUR_WORKS ||
                                                        nav.scrollId ===
                                                            SECTION_IDS.FAQS
                                                    ) {
                                                        topControl = -48; //3rem (48 pixels) the height of the header
                                                    }

                                                    handleScrollIntoView(
                                                        nav.scrollId,
                                                        topControl,
                                                        "instant"
                                                    );
                                                }
                                            }}
                                        >
                                            {nav.icon}
                                            {nav.label}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

const DesktopHeader: React.FC<HeaderProps> = ({ className }) => {
    return (
        <motion.header
            className={`${BASE_HEADER_CLASSNAME} ${className}`}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
            {/* left section */}
            <section className="flex items-center gap-2">
                <Image
                    src={ANIMODEVLOGO}
                    alt="Animo Dev Logo"
                    width={30}
                    height={30}
                    className="border-retro border-black"
                />
                <p>ANIMO.DEV</p>
            </section>

            {/* center */}
            <section className="flex justify-center overflow-hidden">
                <ul className="flex items-center gap-10 font-medium whitespace-nowrap">
                    {HEADER_NAVS.map(
                        (nav) =>
                            nav.label !== "Back to Top" && (
                                <li
                                    key={nav.label}
                                    className="flex items-center gap-2 hover:underline cursor-pointer"
                                    onClick={() => {
                                        // some section overlaps with the header, control it here
                                        let topControl = 0;
                                        if (SECTION_IDS.OUR_WORKS) {
                                            topControl = -48; //3rem (48 pixels) the height of the header
                                        }

                                        handleScrollIntoView(
                                            nav.scrollId,
                                            topControl
                                        );
                                    }}
                                >
                                    {nav.label}
                                </li>
                            )
                    )}
                </ul>
            </section>

            {/* right section */}
            <section className="flex justify-end">
                <button
                    className="hover:underline"
                    onClick={() => {
                        // handle scroll to top
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                >
                    Back to Top
                </button>
            </section>
        </motion.header>
    );
};
