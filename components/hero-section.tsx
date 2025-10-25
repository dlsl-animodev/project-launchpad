
import Button from "./ui/button";
import { motion } from "motion/react";

const HeroSection = () => {
    return (
        <div className="bg-foreground text-background h-[100dvh] flex flex-col items-center justify-center gap-6 text-center px-4">
            {/* TEXTS  */}
            <motion.div
                className="w-full max-w-3xl mx-auto"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="bg-black/90 text-green-400 font-mono rounded-md border border-green-800 px-6 py-4 shadow-lg text-left">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="h-2 w-2 bg-red-500 rounded-full" />
                        <span className="h-2 w-2 bg-yellow-400 rounded-full" />
                        <span className="h-2 w-2 bg-green-500 rounded-full" />
                        <span className="ml-auto text-xs text-green-300">
                            terminal
                        </span>
                    </div>

                    <div className="whitespace-pre-wrap">
                        <code className="text-sm">
                            <span className="text-green-300">
                                user@launchpad
                            </span>
                            <span className="text-green-500">:</span>
                            <span className="text-blue-200">~</span>
                            <span className="text-green-300">$</span>
                            <span className="ml-2">
                                Initialize Project Launchpad...
                            </span>
                            <span className="inline-block ml-2 w-1 h-5 bg-green-300 align-bottom animate-pulse" />
                        </code>
                    </div>
                </div>
            </motion.div>

            <section>
                {/* // animate sliding in from bottom to top */}
                {/* delay the second word slightly  */}
                <h1 className="relative text-8xl md:text-9xl">
                    <motion.div
                        className="font-extrabold font-bebas "
                        initial={{ y: 60, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            y: { duration: 0.7, ease: "easeOut" },
                            opacity: { duration: 0.3, ease: "easeInOut" },
                        }}
                    >
                        DEVELOPERS
                    </motion.div>
                    <motion.div
                        className="font-extrabold font-bebas"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        SOCIETY
                    </motion.div>
                </h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="max-w-xl mx-auto text-lg md:text-xl text-center"
                >
                    &quot;Fostering a collaborative environment where students
                    from all background can learn, create, grow together.&quot;
                </motion.p>
            </section>

            {/* CTA  */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="w-full max-w-xs mx-auto"
            >
                <Button className="w-full">JOIN US NOW!</Button>
            </motion.div>
        </div>
    );
};

export default HeroSection;
