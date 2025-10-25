import { X } from "lucide-react";
import Button from "./ui/button";

import { motion } from "motion/react";

const OurWorks = () => {
    return (
        <div className="flex flex-col items-center px-4">
            <motion.h2
                className="font-bold font-bebas text-8xl text-center"
                initial={{ opacity: 0, y: 20, scale: 0.7 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.1 }}
            >
                OUR WORKS
            </motion.h2>
            <motion.p
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: 0.2 }}
            >
                A showcase of the apps and ideas we have brought to life.
            </motion.p>

            <motion.section
                className="bg-accent border-retro flex flex-col items-center justify-between w-full h-[20rem] p-4"
                initial={{ scale: 0, y: 40 }}
                whileInView={{ scale: 1, y: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 15,
                    delay: 0.1,
                }}
            >
                <div className="border-retro bg-secondary flex items-center justify-between px-4 py-2 w-[90%]">
                    <p className="font-bold"> 404 NOT FOUND </p>
                    <span className="flex items-center justify-center">
                        <X
                            className="bg-accent  border-retro"
                            size={27}
                            color="white"
                        />
                    </span>
                </div>
                <p className="text-center text-primary font-semibold">
                    No finished project found, <br /> work in progress
                </p>
                <Button className="w-full">UPCOMING WORKS</Button>
            </motion.section>
        </div>
    );
};

export default OurWorks;
