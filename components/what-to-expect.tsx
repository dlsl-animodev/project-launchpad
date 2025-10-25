import NotchedBox from "./ui/notched-box";

import { motion } from "motion/react";

const WhatToExpect = () => {
    return (
        <div>
            <section>
                <motion.h2
                    className="font-bold font-bebas text-8xl text-center tracking-wide"
                    initial={{ opacity: 0, y: 20, scale: 0.7 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    WHAT TO EXPECT?
                </motion.h2>
                <motion.p
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                >
                    View our ongoing projects!
                </motion.p>
            </section>

            <section className="relative h-[220vh]">
                {/* parent is tall so children can stick and stack as you scroll */}
                <div className="w-full max-w-4xl mx-auto h-full  flex items-start justify-center">
                    <div className="w-full relative">
                        <motion.div
                            className="sticky top-24 z-0 "
                            initial={{ opacity: 0, y: 40, scale: 0.98 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.35 }}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <NotchedBox
                                className="my-16 h-[20rem] w-full flex items-center justify-center text-foreground"
                                fillColor="#3A86FF"
                            >
                                <h3 className="text-3xl font-bold">
                                    PROJECT LAUNCHPAD
                                </h3>
                            </NotchedBox>
                        </motion.div>

                        <motion.div
                            className="sticky top-24 z-10"
                            initial={{ opacity: 0, y: 60, scale: 0.98 }}
                            whileInView={{ opacity: 1, y: 8, scale: 1 }}
                            transition={{ duration: 0.35, delay: 0.05 }}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <NotchedBox
                                className="my-16 h-[20rem] flex w-full items-center justify-center text-foreground"
                                fillColor="#FF006E"
                            >
                                <h3 className="text-3xl font-bold">
                                    PROJECT LAUNCHPAD
                                </h3>
                            </NotchedBox>
                        </motion.div>

                        <motion.div
                            className="sticky top-24 z-20"
                            initial={{ opacity: 0, y: 80, scale: 0.98 }}
                            whileInView={{ opacity: 1, y: 16, scale: 1 }}
                            transition={{ duration: 0.35, delay: 0.1 }}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <NotchedBox
                                className="my-16 h-[20rem] flex w-full items-center justify-center text-foreground"
                                fillColor="#8338EC"
                            >
                                <h3 className="text-3xl font-bold">
                                    PROJECT LAUNCHPAD
                                </h3>
                            </NotchedBox>
                        </motion.div>

                        <motion.div
                            className="sticky top-24 z-20"
                            initial={{ opacity: 0, y: 100, scale: 0.98 }}
                            whileInView={{ opacity: 1, y: 24, scale: 1 }}
                            transition={{ duration: 0.35, delay: 1.5 }}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <NotchedBox
                                className="my-16 h-[20rem] flex w-full items-center justify-center text-foreground"
                                fillColor="#8338EC"
                            >
                                <h3 className="text-3xl font-bold">
                                    PROJECT LAUNCHPAD
                                </h3>
                            </NotchedBox>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="mt-[10rem] md:mt-[25rem] md:mb-[10rem]">
                <motion.h2
                    className="font-bold font-bebas text-6xl text-center tracking-wide "
                    initial={{ opacity: 0, y: 20, scale: 0.7 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    WE SHARE THE BUILD PROCESS, ARCHITECTURE PLANS, AND
                    PROGRESS.
                </motion.h2>
                <motion.p
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                >
                    This is a collaborative space, where your thoughts and ideas
                    are welcome as we code a real-world solution!
                </motion.p>
            </section>
        </div>
    );
};

export default WhatToExpect;
