import Button from "./ui/button";

import { motion } from "motion/react";

const FooterCTA = () => {
    return (
        <div className="flex flex-col items-center px-4">
            <motion.h2
                className="font-bold font-bebas text-6xl text-center tracking-wide"
                initial={{ opacity: 0, y: 20, scale: 0.7 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                READY AND EXCITED TO INNOVATE?
            </motion.h2>
            <motion.p
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
            >
                We will follow up with your application status.
            </motion.p>
            <motion.div
                className="w-full max-w-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
            >
                <Button className="w-full mt-12">JOIN US!</Button>
            </motion.div>
        </div>
    );
};

export default FooterCTA;
