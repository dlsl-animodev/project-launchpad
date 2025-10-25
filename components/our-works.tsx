import { X } from "lucide-react";
import Button from "./ui/button";

import { motion } from "motion/react";

const OurWorks = () => {
    return (
        <div className="flex flex-col items-center px-4">
            <motion.h2
                className="font-bold font-bebas text-8xl text-center"
                initial={{ opacity: 0, y: 20, scale: 0.7 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.1 }}
            >
                OUR WORKS
            </motion.h2>
            <motion.p
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: 0.2 }}
            >
                A showcase of the apps and ideas we have brought to life.
            </motion.p>

            {/* parent for the scrolling / parallax effect */}
            <div className="h-[200vh] w-full">
                <div className="flex w-full h-full">
                    <div className="w-1/2">
                        <div className="h-screen flex items-center">
                            <motion.h2
                                className="text-8xl mx-[4rem]"
                                initial={{ opacity: 0, y: 20, scale: 0.7 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.15 }}
                            >
                                Project QoL
                            </motion.h2>
                        </div>

                        <div className="h-screen flex items-center">
                            <motion.p
                                className="mx-[4rem] font-semibold text-xl"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.15, delay: 0.1 }}
                            >
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Doloremque tenetur quam in,
                                atque temporibus laborum accusantium eos qui
                                ipsum est cupiditate, excepturi quasi sint
                                voluptates eius expedita odio eaque beatae.
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Perspiciatis, molestias.
                                Voluptates maxime dolores ducimus neque minima
                                explicabo unde ex, rerum cumque inventore quia
                                dicta eos quae fuga! Molestias, consectetur
                                distinctio.
                            </motion.p>
                        </div>
                    </div>

                    <div className="w-1/2 flex items-start">
                        <div className="sticky top-24 w-full h-[60vh] flex items-center justify-center">
                            <motion.section
                                className="bg-accent border-retro flex flex-col items-center justify-between aspect-video p-4 w-[90%]"
                                initial={{ scale: 0, y: 30, opacity: 0.8 }}
                                whileInView={{ scale: 1, y: 0, opacity: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 90,
                                    damping: 15,
                                    delay: 0.05,
                                }}
                                viewport={{ amount: 0.6 }}
                            >
                                <div className="border-retro bg-secondary flex items-center justify-between px-4 py-2 w-[90%]">
                                    <p className="font-bold"> Project QoL </p>
                                    <span className="flex items-center justify-center">
                                        <X
                                            className="bg-accent  border-retro"
                                            size={27}
                                            color="white"
                                        />
                                    </span>
                                </div>
                                <p className="text-center text-primary font-semibold">
                                    No finished project found, <br /> work in
                                    progress
                                </p>
                                <Button className="w-full">
                                    {" "}
                                    UPCOMING WORKS{" "}
                                </Button>
                            </motion.section>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-[200vh] w-full">
                <div className="flex w-full h-full">
                    <div className="w-1/2">
                        <div className="h-screen flex items-center">
                            <motion.h2
                                className="text-8xl mx-[4rem]"
                                initial={{ opacity: 0, y: 20, scale: 0.7 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.15 }}
                            >
                                Project Flux
                            </motion.h2>
                        </div>

                        <div className="h-screen flex items-center">
                            <motion.p
                                className="mx-[4rem] font-semibold text-xl"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.15, delay: 0.1 }}
                            >
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Doloremque tenetur quam in,
                                atque temporibus laborum accusantium eos qui
                                ipsum est cupiditate, excepturi quasi sint
                                voluptates eius expedita odio eaque beatae.
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Perspiciatis, molestias.
                                Voluptates maxime dolores ducimus neque minima
                                explicabo unde ex, rerum cumque inventore quia
                                dicta eos quae fuga! Molestias, consectetur
                                distinctio.
                            </motion.p>
                        </div>
                    </div>

                    <div className="w-1/2 flex items-start">
                        <div className="sticky top-24 w-full h-[60vh] flex items-center justify-center">
                            <motion.section
                                className="bg-accent border-retro flex flex-col items-center justify-between aspect-video p-4 w-[90%]"
                                initial={{ scale: 0, y: 30, opacity: 0.8 }}
                                whileInView={{ scale: 1, y: 0, opacity: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 90,
                                    damping: 15,
                                    delay: 0.05,
                                }}
                                viewport={{ amount: 0.6 }}
                            >
                                <div className="border-retro bg-secondary flex items-center justify-between px-4 py-2 w-[90%]">
                                    <p className="font-bold"> Project Flux </p>
                                    <span className="flex items-center justify-center">
                                        <X
                                            className="bg-accent  border-retro"
                                            size={27}
                                            color="white"
                                        />
                                    </span>
                                </div>
                                <p className="text-center text-primary font-semibold">
                                    Prototype UI / WIP
                                </p>
                                <Button className="w-full">
                                    {" "}
                                    VIEW DETAILS{" "}
                                </Button>
                            </motion.section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurWorks;
