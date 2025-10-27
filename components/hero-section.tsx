import {
    SectionContainer,
    SectionContainerFooter,
    SectionContainerHeader,
} from "./reusables/section";
import Button from "./ui/button";
import { motion } from "motion/react";

const HeroSection = () => {
    return (
        <SectionContainer className="h-[100dvh] justify-center text-center">
            <SectionContainerHeader>
                <h1 className="font-gtproelium font-extrabold relative text-[4rem] leading-[1] sm:text-[7rem]  md:text-[8rem] lg:text-[10rem]">
                    <motion.div
                        className="font-extrabold  "
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
                        className="font-extrabold "
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
                    className="text-base sm:text-lg md:text-2xl text-center font-altone"
                >
                    &quot;Fostering a collaborative environment where students
                    from all background can learn, create, grow together.&quot;
                </motion.p>
            </SectionContainerHeader>

            {/* CTA  */}
            <SectionContainerFooter className="flex flex-col lg:flex-row w-full max-w-md lg:max-w-2xl items-center gap-2">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="w-full"
                >
                    <Button className="w-full"> COLLABORATE WITH US!</Button>
                </motion.div>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="w-full"
                >
                    <Button
                        className="w-full border-black"
                        variant="secondary"
                    >
                        JOIN US NOW!
                    </Button>
                </motion.div>
            </SectionContainerFooter>
        </SectionContainer>
    );
};

export default HeroSection;
