
import Button from "./ui/button";
import { motion } from "motion/react";

const HeroSection = () => {
    return (
        <div className="bg-foreground text-background h-[100dvh] flex flex-col items-center justify-center gap-6 text-center px-4">
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
