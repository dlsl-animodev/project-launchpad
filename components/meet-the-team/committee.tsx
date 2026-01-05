"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import OfficerWindow, { OfficerType } from "./officer-window";
import Button from "../ui/button";
import {  ChevronUp } from "lucide-react";

interface CommitteeProps {
    name: string;
    officers: OfficerType[];
    index: number;
    isLast?: boolean;
}
const Committee: React.FC<CommitteeProps> = ({ name, officers, isLast }) => {
    const [open, setOpen] = useState(false);

    const handleOpenCommittee = () => {
        setOpen(!open);
    };

    // if this is the element that is open, add more margin below so other buttons do not overlap 
    // the opened committee (unless it's the last one)
    return (
        <div
            className={`
                w-full max-w-[90vw] mx-auto
                ${open && !isLast ? "mb-[10rem] lg:mb-[10rem]" : open && isLast ? "mb-20" : "mb-0"}
                `}
        >
            <Button
                initial={{ opacity: 0, y: 20, scale: 0.7 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                onClick={handleOpenCommittee}
                className="w-full"
            >
                <span>{name}</span>
                <ChevronUp 
                    className={`ml-2 transition-transform duration-300 ${open ? "transform rotate-0" : "transform rotate-180"}`} 
                />
            </Button>

            <AnimatePresence>
                {open && (
                    <motion.ul
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className={`mt-8 flex flex-wrap justify-center gap-[8rem] lg:gap-[3rem] space-y-6 w-full max-w-[90vw] mx-auto`}
                    >
                        {officers.map((officer, index) => (
                            <OfficerWindow
                                key={officer.name}
                                officer={officer}
                                delay={index * 0.05}
                            />
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Committee;
