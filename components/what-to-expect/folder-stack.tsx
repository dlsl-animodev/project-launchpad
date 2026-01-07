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
            className="absolute w-full left-0"
            style={ 
                {
                    top: `${index * 4}rem`,
                    zIndex: index,
                }
            }
        >
            <NotchedBox
                className="my-16 aspect-video w-full flex items-center justify-center text-foreground"
                fillColor={fillColor}
            >
                <p className="text-2xl font-bold">
                    {title}
                </p>
            </NotchedBox>
        </motion.div>
    );
};

export default FolderStack;
