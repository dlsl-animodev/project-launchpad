import { motion } from "motion/react";

import { Minus } from "lucide-react";
import { Square } from "lucide-react";
import { X } from "lucide-react";

// scrolling animation on scale and y axis
const VideoSection = () => {
    return (
        <div className="flex flex-wrap lg:flex-nowrap lg:items-center mt-[10rem] space-y-[5rem] px-[1rem]">
            <motion.h2
                className="font-bold font-bebas text-7xl lg:text-9xl text-center lg:flex-1/2"
                initial={{ opacity: 0, y: 20, scale: 0.7 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.1 }}
            >
                JOIN THE FUN, CREATIVITY, AND INNOVATION!
            </motion.h2>

            <div className="flex-1 lg:flex-1/2 flex justify-center">
                <motion.section
                    className="relative bg-secondary aspect-square p-4 pt-12 border-retro"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 90,
                        damping: 15,
                    }}
                >
                    {/* Put scale animation only on this inner div */}
                    <motion.div
                        // initial={{ scale: 0 }}
                        // whileInView={{ scale: 1 }}
                        // transition={{
                        //     type: "spring",
                        //     stiffness: 90,
                        //     damping: 15,
                        // }}
                        className="relative w-full h-full"
                    >
                        <video
                            src="/sample-video.mp4"
                            className="w-full h-full object-cover border-retro"
                            autoPlay
                            loop
                            muted
                        />
                    </motion.div>

                    <div className="absolute top-3 right-4 z-50 pointer-events-none">
                        <div className="flex gap-2 items-center">
                            <Minus
                                className="bg-primary border-retro"
                                size={27}
                                color="black"
                            />
                            <Square
                                className="bg-primary border-retro p-1"
                                size={27}
                                color="black"
                            />
                            <X
                                className="bg-primary border-retro"
                                size={27}
                                color="black"
                            />
                        </div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default VideoSection;
