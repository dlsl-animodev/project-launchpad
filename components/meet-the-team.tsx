"use client";

import { Minus, Square, X } from "lucide-react";

import { motion } from "motion/react";

const MeetTheTeam = () => {
    return (
        <div className="bg-accent border-retro-y py-16 px-4">
            <section>
                <motion.h2
                    className="font-bold font-bebas text-8xl text-center text-primary tracking-wide"
                    initial={{ opacity: 0, y: 20, scale: 0.7 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    MEET THE TEAM
                </motion.h2>
                <motion.p
                    className="text-white text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                >
                    Our team is a diverse group of passionate dedicated students
                    fostering a collaborative environment where students from
                    all backgrounds can thrive and innovate together.
                </motion.p>
            </section>

            <section className="flex flex-col items-center mt-16">
                <motion.h3
                    className="font-bold text-secondary text-6xl text-center mb-12"
                    initial={{ opacity: 0, y: 20, scale: 0.7 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    EXECUTIVE COMMITTEE
                </motion.h3>

                <ul className="flex flex-col gap-12 w-full space-y-6">
                    <motion.li
                        className="bg-secondary w-full h-[25rem] p-4 pt-12 border-retro relative"
                        initial={{ scale: 0, y: 40 }}
                        whileInView={{ scale: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 90,
                            damping: 15,
                        }}
                    >
                        <div className="absolute top-3 right-4 z-50">
                            <div className="flex gap-2 items-center">
                                <Minus
                                    className="bg-accent  border-retro"
                                    size={27}
                                    color="white"
                                />
                                <Square
                                    className="bg-accent  border-retro p-1"
                                    size={27}
                                    color="white"
                                />
                                <X
                                    className="bg-accent  border-retro"
                                    size={27}
                                    color="white"
                                />
                            </div>
                        </div>
                        <div className="absolute top-[-10px] bg-accent border-retro  px-4 py-2">
                            <p className="text-white font-bold">
                                TYRON SCOTT LUCENA
                            </p>
                        </div>

                        <div className="w-full h-full bg-primary border-retro" />
                        {/* FLOATING BOTTOM  */}
                        <motion.div
                            className="absolute bottom-[-40px] right-10 w-[60%] bg-background p-2 border-retro"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                        >
                            <div className="bg-secondary w-full border-retro p-2 py-1 flex items-center justify-between">
                                <p className="font-bold">PRESIDENT</p>
                                <X
                                    className="bg-accent  border-retro"
                                    size={27}
                                    color="white"
                                />
                            </div>
                            <p className="text-sm mt-2">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                        </motion.div>
                    </motion.li>
                </ul>
            </section>

            <section className="flex flex-col items-center mt-16">
                <motion.h3
                    className="font-bold text-secondary text-5xl text-center mb-12"
                    initial={{ opacity: 0, y: 20, scale: 0.7 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    DEVELOPMENT COMMITTEE
                </motion.h3>

                <ul className="flex flex-col gap-12 w-full space-y-6">
                    <motion.li
                        className="bg-secondary w-full h-[25rem] p-4 pt-12 border-retro relative"
                        initial={{ scale: 0, y: 40 }}
                        whileInView={{ scale: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 90,
                            damping: 15,
                        }}
                    >
                        <div className="absolute top-3 right-4 z-50">
                            <div className="flex gap-2 items-center">
                                <Minus
                                    className="bg-accent  border-retro"
                                    size={27}
                                    color="white"
                                />
                                <Square
                                    className="bg-accent  border-retro p-1"
                                    size={27}
                                    color="white"
                                />
                                <X
                                    className="bg-accent  border-retro"
                                    size={27}
                                    color="white"
                                />
                            </div>
                        </div>
                        <div className="absolute top-[-10px] bg-accent border-retro  px-4 py-2">
                            <p className="text-white font-bold">
                                TYRON SCOTT LUCENA
                            </p>
                        </div>

                        <div className="w-full h-full bg-primary border-retro" />
                        {/* FLOATING BOTTOM  */}
                        <motion.div
                            className="absolute bottom-[-40px] right-10 w-[60%] bg-background p-2 border-retro"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                        >
                            <div className="bg-secondary w-full border-retro p-2 py-1 flex items-center justify-between">
                                <p className="font-bold">PRESIDENT</p>
                                <X
                                    className="bg-accent  border-retro"
                                    size={27}
                                    color="white"
                                />
                            </div>
                            <p className="text-sm mt-2">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                        </motion.div>
                    </motion.li>
                </ul>
            </section>

            <section className="flex flex-col items-center mt-16">
                <motion.h3
                    className="font-bold text-secondary text-6xl text-center mb-12"
                    initial={{ opacity: 0, y: 20, scale: 0.7 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    CREATIVES COMMITTEE
                </motion.h3>

                <ul className="flex flex-col gap-12 w-full space-y-6">
                    <motion.li
                        className="bg-secondary w-full h-[25rem] p-4 pt-12 border-retro relative"
                        initial={{ scale: 0, y: 40 }}
                        whileInView={{ scale: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 90,
                            damping: 15,
                        }}
                    >
                        <div className="absolute top-3 right-4 z-50">
                            <div className="flex gap-2 items-center">
                                <Minus
                                    className="bg-accent  border-retro"
                                    size={27}
                                    color="white"
                                />
                                <Square
                                    className="bg-accent  border-retro p-1"
                                    size={27}
                                    color="white"
                                />
                                <X
                                    className="bg-accent  border-retro"
                                    size={27}
                                    color="white"
                                />
                            </div>
                        </div>
                        <div className="absolute top-[-10px] bg-accent border-retro  px-4 py-2">
                            <p className="text-white font-bold">
                                TYRON SCOTT LUCENA
                            </p>
                        </div>

                        <div className="w-full h-full bg-primary border-retro" />
                        {/* FLOATING BOTTOM  */}
                        <motion.div
                            className="absolute bottom-[-40px] right-10 w-[60%] bg-background p-2 border-retro"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                        >
                            <div className="bg-secondary w-full border-retro p-2 py-1 flex items-center justify-between">
                                <p className="font-bold">PRESIDENT</p>
                                <X
                                    className="bg-accent  border-retro"
                                    size={27}
                                    color="white"
                                />
                            </div>
                            <p className="text-sm mt-2">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                        </motion.div>
                    </motion.li>
                </ul>
            </section>
        </div>
    );
};

export default MeetTheTeam;
