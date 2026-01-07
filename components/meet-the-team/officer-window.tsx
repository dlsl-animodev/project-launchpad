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
            className="bg-secondary w-full md:w-auto aspect-auto p-1 pt-9 border-retro relative"
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
            {/* Window Buttons */}
            <div className="absolute top-2 right-1 z-30">
                <div className="flex gap-1 items-center">
                    <Minus
                        className="bg-background  border-r-3 border-b-3 border-[#946112]"
                        size={20}
                        color="black"
                    />
                    <Square
                        className="bg-background p-0.5  border-r-3 border-b-3 border-[#946112]"
                        size={20}
                        color="black"
                    />
                    <X
                        className="bg-background  border-r-3 border-b-3 border-[#946112]"
                        size={20}
                        color="black"
                    />
                </div>
            </div>

            {/* Officer Name  */}
            <div className="absolute top-[-10px] bg-[#152642] px-4 py-2 z-40">
                <p className="text-white font-bold text-sm">{officer.name}</p>
            </div>

            {/* Officer Image  */}
            <Image
                src={officer.imageUrl}
                alt={officer.name}
                width={200}
                height={200}
                className="w-full h-full border-retro border-black object-cover"
            />

            {/* FLOATING BOTTOM  */}
            <motion.div
                className="absolute bg-background p-1 border-retro
                    right-6 lg:right-10 
                    w-[80%] lg:w-[60%]
                    -bottom-[120px]  
                    lg:bottom-[-40px] "
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
            >
                {/* Role Header */}
                <div className="bg-secondary w-full border-retro p-2 py-1 flex items-center justify-between">
                    <p className="font-bold">{officer.role}</p>
                    <X
                        className="bg-primary border-retro"
                        size={27}
                        color="black"
                    />
                </div>

                {/* Role Description */}
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
