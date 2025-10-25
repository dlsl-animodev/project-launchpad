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
            className="bg-secondary w-[25rem] h-[25rem] p-4 pt-12 border-retro relative"
            initial={{ scale: 0, y: 40 }}
            whileInView={{ scale: 1, y: 0 }}
            transition={{
                type: "spring",
                stiffness: 90,
                damping: 15,
                delay: delay || 0,
            }}
        >
            <div className="absolute top-3 right-4 z-50">
                <div className="flex gap-2 items-center">
                    <Minus
                        className="bg-accent  border-retro"
                        size={27}
                        color="white"
                    />
                    <Square
                        className="bg-accent  border-retro p-1"
                        size={27}
                        color="white"
                    />
                    <X
                        className="bg-accent  border-retro"
                        size={27}
                        color="white"
                    />
                </div>
            </div>
            <div className="absolute top-[-10px] bg-accent border-retro  px-4 py-2">
                <p className="text-white font-bold">{officer.name}</p>
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
                className="absolute bottom-[-40px] right-10 w-[60%] bg-background p-2 border-retro"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
            >
                <div className="bg-secondary w-full border-retro p-2 py-1 flex items-center justify-between">
                    <p className="font-bold">PRESIDENT</p>
                    <X
                        className="bg-accent  border-retro"
                        size={27}
                        color="white"
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
