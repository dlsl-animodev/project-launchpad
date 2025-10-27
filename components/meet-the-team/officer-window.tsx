import { Minus, X, Square } from "lucide-react";

import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";

export interface OfficerType {
    name: string;
    role: string;
    imageUrl: string | StaticImageData;
    shortDescription: string;
}

interface OffierWindowProps {
    officer: OfficerType;
    delay?: number;
}
const OfficerWindow: React.FC<OffierWindowProps> = ({ officer, delay }) => {
    return (
        <motion.li
            key={officer.role}
            className="bg-secondary aspect-square p-4 pt-12 border-retro relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                type: "spring",
                stiffness: 90,
                damping: 15,
                delay: delay || 0,
            }}
            viewport={{ once: true }}
        >
            <div className="absolute top-3 right-4 z-30">
                <div className="flex gap-2 items-center">
                    <Minus
                        className="bg-background  border-retro"
                        size={27}
                        color="black"
                    />
                    <Square
                        className="bg-background  border-retro p-1"
                        size={27}
                        color="black"
                    />
                    <X
                        className="bg-background  border-retro"
                        size={27}
                        color="black"
                    />
                </div>
            </div>
            <div className="absolute top-[-10px] bg-[#152642] border-retro  px-4 py-2 z-40">
                <p className="text-white font-bold text-xl">{officer.name}</p>
            </div>
            <Image
                src={officer.imageUrl}
                alt={officer.name}
                width={200}
                height={200}
                className="w-full h-full border-retro border-black object-cover"
            />

            {/* FLOATING BOTTOM  */}
            <motion.div
                className="absolute bg-background p-2 border-retro
                    right-6 lg:right-10 
                    w-[80%] lg:w-[60%]
                    -bottom-[120px]  
                    lg:bottom-[-40px] "
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <div className="bg-secondary w-full border-retro p-2 py-1 flex items-center justify-between">
                    <p className="font-bold">{officer.role}</p>
                    <X
                        className="bg-primary border-retro"
                        size={27}
                        color="black"
                    />
                </div>
                <p className="text-sm mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
            </motion.div>
        </motion.li>
    );
};

export default OfficerWindow;
