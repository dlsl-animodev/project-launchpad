"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const FrequentlyAskedQuestions = () => {
    const dummyQuestions = [
        {
            question: "How do I submit my project?",
            answer: "You can submit your project by clicking on the 'Share your entry' button and filling out the submission form.",
        },
        {
            question: "What are the criteria for being featured?",
            answer: "Projects are selected based on creativity, innovation, and community impact.",
        },
        {
            question: "Can I update my submission after it's been sent?",
            answer: "Yes, you can update your submission by contacting our support team with your project details.",
        },
        {
            question: "How often are new projects featured?",
            answer: "New projects are featured on a monthly basis, so be sure to check back regularly!",
        },
        {
            question: "Is there a limit to how many projects I can submit?",
            answer: "There is no limit to the number of projects you can submit. Feel free to share all your innovative ideas!",
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <section>
                <motion.h2
                    className="font-bold font-bebas text-7xl text-center tracking-wide"
                    initial={{ opacity: 0, y: 20, scale: 0.7 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    FREQUENTLY ASKED QUESTIONS
                </motion.h2>
            </section>

            <ul className="my-16">
                {dummyQuestions.map((item, index) => (
                    <motion.li
                        key={index}
                        className="border-retro py-6 px-4 cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.1 }}
                        onClick={() => toggle(index)}
                    >
                        <div className="flex justify-between items-center">
                            <p className="font-bold text-lg">{item.question}</p>
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
                                        {item.answer}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.li>
                ))}
            </ul>
        </div>
    );
};

export default FrequentlyAskedQuestions;
