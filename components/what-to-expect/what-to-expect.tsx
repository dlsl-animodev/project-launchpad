import FolderStack from "./folder-stack";

import { motion } from "motion/react";

const WhatToExpect = () => {
    const projects = [
        { title: "Project QoL", fillColor: "#FFBE0B" },
        { title: "Project Harmony", fillColor: "#FB5607" },
        { title: "Project Launchpad", fillColor: "#FF006E" },
        { title: "Project Deep Dive", fillColor: "#8338EC" },
        { title: "Project Spotlight", fillColor: "#3A86FF" },
    ];

    return (
        <div>
            <div>
                <section className="sticky top-0">
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

                <section className="relative h-fit">
                    {/* parent is tall so children can stick and stack as you scroll */}
                    <div className="w-full max-w-4xl mx-auto h-full flex items-start justify-center">
                        <div className="w-full relative">
                            {projects.map((project, index) => (
                                <FolderStack
                                    key={index}
                                    index={index}
                                    title={project.title}
                                    fillColor={project.fillColor}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <section className="mb-[8rem] mt-[10rem]">
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
