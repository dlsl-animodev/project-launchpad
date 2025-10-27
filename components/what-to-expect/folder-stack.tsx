import { motion } from "motion/react";
import NotchedBox from "../ui/notched-box";

interface FolderStackProps {
    index: number;
    title: string;
    fillColor : string;
}
const FolderStack: React.FC<FolderStackProps> = ({ index, title, fillColor }) => {
    return (
        <motion.div
            className="sticky top-[7rem] lg:top-[11rem] z-0 "
            initial={{ opacity: 0, y: 40 + index * 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: index * 8, scale: 1 }}
            transition={{ duration: 0.35 }}
            viewport={{ once: true }}
        >
            <NotchedBox
                className="my-16 aspect-video w-full flex items-center justify-center text-foreground"
                fillColor={fillColor}
            >
                <p className="text-3xl font-bold">
                    {title}
                </p>
            </NotchedBox>
        </motion.div>
    );
};

export default FolderStack;
