"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import {
    SectionContainer,
    SectionContainerHeader,
    SectionContainerMain,
    SectionTitle,
} from "./reusables/section";
import { SECTION_IDS } from "@/lib/scroll-into-view-ids";

const FrequentlyAskedQuestions = () => {
    const dummyQuestions = [
        {
            question: "Sample Question",
            answer: "Sample answer goes here.",
        },
        {
            question: "Sample Question",
            answer: "Sample answer goes here.",
        },
        {
       question: "Sample Question",
            answer: "Sample answer goes here.",
        },
        {
        question: "Sample Question",
            answer: "Sample answer goes here.",
        },
        {
        question: "Sample Question",
            answer: "Sample answer goes here.",
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <SectionContainer className="mt-[10rem] px-0" id={SECTION_IDS.FAQS}> 
            <SectionContainerHeader>
                <SectionTitle
                    initial={{ opacity: 0, y: 20, scale: 0.7 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    FREQUENTLY ASKED QUESTIONS
                </SectionTitle>
            </SectionContainerHeader>

            <SectionContainerMain className="w-full">
                <ul>
                    {dummyQuestions.map((item, index) => (
                        <motion.li
                            key={index}
                            className={`border-t-2 py-6 px-4 cursor-pointer ${index == dummyQuestions.length - 1 ? 'border-b-2' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.1 }}
                            onClick={() => toggle(index)}
                        >
                            <div className="flex justify-between items-center">
                                <p className="font-bold text-lg">
                                    {item.question} {index}
                                </p>
                                <motion.span
                                    animate={{
                                        rotate: openIndex === index ? 45 : 0,
                                    }}
                                    transition={{ duration: 0.2 }}
                                    className="text-xl select-none"
                                >
                                    +
                                </motion.span>
                            </div>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeInOut",
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <p className="mt-3 text-neutral-700">
                                            {item.answer} {index}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.li>
                    ))}
                </ul>
            </SectionContainerMain>
        </SectionContainer>
    );
};

export default FrequentlyAskedQuestions;
