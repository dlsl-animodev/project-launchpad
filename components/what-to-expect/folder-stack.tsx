import { motion } from "motion/react";
import NotchedBox from "../ui/notched-box";

interface FolderStackProps {
    index: number;
    title: string;
    fillColor: string;
    isExpanded: boolean;
    onClick: () => void;
    expandedIndex: number | null;
}

const   FolderStack: React.FC<FolderStackProps> = ({ 
    index, 
    title, 
    fillColor, 
    isExpanded, 
    onClick,
    expandedIndex
}) => {
    const baseOffset = 4; // rem between collapsed folders
    const expandedContentHeight = 20; // additional height when expanded
    
    // If there's an expanded folder and this folder is in front of it (higher index), move it down
    const shouldMoveDown = expandedIndex !== null && index > expandedIndex;
    
    return (
        <motion.div
            className="absolute w-full left-0 cursor-pointer"
            onClick={onClick}
            style={{ 
                zIndex: index,
            }}
            animate={{
                top: `${index * baseOffset}rem`,
                y: shouldMoveDown ? expandedContentHeight * 16 : 0, // Move down if there's an expanded folder behind this one
            }}
            transition={{
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
            }}
        >
            <NotchedBox
                className="flex items-center justify-center text-foreground overflow-hidden w-full"
                fillColor={fillColor}
            >
                <motion.div
                    className="w-full"
                    animate={{
                        height: isExpanded ? "26rem" : "6rem",
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0, 0.2, 1],
                    }}
                >
                    <p className="text-2xl font-bold    ">
                        {title}
                    </p>
                    <motion.div
                        className="px-4 pb-4"
                        initial={{ opacity: 0 }}
                        animate={{ 
                            opacity: isExpanded ? 1 : 0,
                            display: isExpanded ? "block" : "none",
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <p className="text-sm mt-2">
                            Click to collapse and see other projects.
                        </p>
                    </motion.div>
                </motion.div>
            </NotchedBox>
        </motion.div>
    );
};

export default FolderStack;
