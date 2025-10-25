import { motion } from "motion/react";

import { Minus } from "lucide-react";
import { Square } from "lucide-react";
import { X } from "lucide-react";

// scrolling animation on scale and y axis
const VideoSection = () => {
    return (
        <div className="mt-[10rem] space-y-[5rem] px-[1rem]">
            <motion.h2
                className="font-bold font-bebas text-7xl text-center"
                initial={{ opacity: 0, y: 20, scale: 0.7 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.1 }}
            >
                JOIN THE FUN, CREATIVITY, AND INNOVATION!
            </motion.h2>

            <motion.section
                className="relative bg-secondary w-full h-[25rem] p-4 pt-12 border-retro origin-center"
                initial={{ scale: 0, y: 40 }}
                whileInView={{ scale: 1, y: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 15,
                }}
            >
                {/* Put scale animation only on this inner div */}
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 90,
                        damping: 15,
                    }}
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
                            className="bg-accent border-retro"
                            size={27}
                            color="white"
                        />
                        <Square
                            className="bg-accent border-retro p-1"
                            size={27}
                            color="white"
                        />
                        <X
                            className="bg-accent border-retro"
                            size={27}
                            color="white"
                        />
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default VideoSection;
