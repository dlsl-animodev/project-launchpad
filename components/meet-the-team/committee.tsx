"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import OfficerWindow, { OfficerType } from "./officer-window";
import { SectionContainerSubHeading } from "../reusables/section";
import Button from "../ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface CommitteeProps {
    name: string;
    officers: OfficerType[];
    index: number;
}
const Committee: React.FC<CommitteeProps> = ({ name, officers, index }) => {
    const [open, setIsOpen] = useState(false);

    const handleOpenCommittee = () => {
        setIsOpen(!open);
    };

    return (
        <>
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
        </>
    );
};

export default Committee;
