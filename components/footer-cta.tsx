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
            <SectionContainerMain>
                <motion.div
                    className="w-full max-w-md"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                >
                    <Button className="w-full mt-12">JOIN US!</Button>
                </motion.div>
            </SectionContainerMain>
        </SectionContainer>
    );
};

export default FooterCTA;
