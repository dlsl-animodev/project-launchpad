import { motion } from "motion/react";

import { Minus } from "lucide-react";
import { Square } from "lucide-react";
import { X } from "lucide-react";

const VideoSection = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center mt-[10rem] space-y-[2rem] lg:space-y-[5rem] px-[1rem]">
            <motion.h2
                className="font-gtproelium text-7xl lg:text-9xl text-center lg:flex-1/2 leading-[1.1]"
                initial={{ opacity: 0, y: 20, scale: 0.7 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.2, delay: 0.2 }}
            >
                Building <br />
                <span className="bg-accent text-white border-retro px-2 mx-2 py-2 border-black whitespace-nowrap">
                    WHAT&apos;S NEXT
                </span>
            </motion.h2>

            <div className="flex-1 lg:flex-1/2 flex justify-center">
                <motion.section
                    className="relative bg-secondary aspect-square p-4 pt-12 border-retro"
                    initial={{ scale: 0, y: 30, opacity: 0.8 }}
                    whileInView={{ scale: 1, y: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 90,
                        damping: 15,
                        delay: 0.05,
                    }}
                    viewport={{ amount: 0.2, margin: "-50px 0px" }}
                >
                    <div className="relative w-full h-full">
                        <video
                            src="/sample-video.mp4"
                            className="w-full h-full object-cover border-retro"
                            autoPlay
                            loop
                            muted
                            playsInline
                            webkit-playsinline="true"
                            controls={false}
                        />
                    </div>

                    <div className="absolute top-3 right-4 z-40 pointer-events-none">
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
