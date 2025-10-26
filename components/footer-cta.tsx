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
        <SectionContainer>
            <SectionContainerHeader>
                <SectionTitle
                    initial={{ opacity: 0, y: 20, scale: 0.7 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    READY AND EXCITED TO INNOVATE?
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
            <SectionContainerMain className="flex flex-col w-full max-w-md items-center gap-2">
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
                        className="w-full bg-accent border-black"
                        variant="accent"
                    >
                        JOIN US NOW!
                    </Button>
                </motion.div>
            </SectionContainerMain>
        </SectionContainer>
    );
};

export default FooterCTA;
