import { motion } from "motion/react";
import OfficerWindow, { OfficerType } from "./officer-window";

interface CommitteeProps {
    name: string;
    officers: OfficerType[];
}
const Committee: React.FC<CommitteeProps> = ({ name, officers }) => {
    return (
        <>
            <motion.h3
                className="font-bold text-secondary text-6xl text-center my-[4rem]"
                initial={{ opacity: 0, y: 20, scale: 0.7 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                {name}
            </motion.h3>

            <ul
                className={`flex flex-wrap justify-center gap-12 w-full space-y-6`}
            >
                {officers.map((officer, index) => (
                    <OfficerWindow key={officer.name} officer={officer} delay={index * 0.05} />
                ))}
            </ul>
        </>
    );
};

export default Committee;
