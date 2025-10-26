import { twMerge } from "tailwind-merge";

import { motion, HTMLMotionProps } from "motion/react";

interface SubtitleProps extends HTMLMotionProps<"h2"> {
    children: React.ReactNode;
    className?: string;
}

const Subtitle: React.FC<SubtitleProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <motion.h2
            className={twMerge(
                "font-bold font-bebas text-center tracking-wide",
                className
            )}
            {...props}
        >
            {children}
        </motion.h2>
    );
};

interface DescriptionProps extends HTMLMotionProps<"p"> {
    children: React.ReactNode;
    className?: string;
}
const Description: React.FC<DescriptionProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <motion.p {...props} className={twMerge("text-center text-lg lg:text-3xl", className)}>
            {children}
        </motion.p>
    );
};

export default Description;

export { Subtitle, Description };
