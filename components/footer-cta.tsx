import {
    SectionContainer,
    SectionContainerHeader,
    SectionContainerMain,
    SectionDescription,
    SectionTitle,
} from "./reusables/section";
import Button from "./ui/button";

import { motion } from "motion/react";

const FooterCTA = () => {
    return (
        <SectionContainer className="h-[100dvh] flex justify-center items-center">
            <SectionContainerHeader className="space-y-[2rem]">
                <SectionTitle
                className="leading-[1.5]"
                    initial={{ opacity: 0, y: 20, scale: 0.7 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    READY AND EXCITED TO
                    <span
                        className="bg-accent text-white border-retro px-2 mx-2 border-black whitespace-nowrap py-2" 
                    >INNOVATE?</span>
                </SectionTitle>
                <SectionDescription
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                >
                    We will follow up with your application status.
                </SectionDescription>
            </SectionContainerHeader>
            <SectionContainerMain  className="flex flex-col lg:flex-row w-full max-w-md lg:max-w-2xl items-center gap-2">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="w-full"
                >
                    <Button className="w-full"> COLLABORATE WITH US!</Button>
                </motion.div>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="w-full"
                >
                    <Button
                        className="w-full border-black "
                        variant="secondary"
                    >
                        JOIN US NOW!
                    </Button>
                </motion.div>
            </SectionContainerMain>
        </SectionContainer>
    );
};

export default FooterCTA;
