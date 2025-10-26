import { twMerge } from "tailwind-merge";
import { HTMLMotionProps, motion } from "motion/react";

// ACTUAL SECTION
interface SectionProps {
    children: React.ReactNode;
    className?: string;
}
const SectionContainer: React.FC<SectionProps> = ({ children, className }) => {
    return (
        <section
            className={twMerge(
                `flex flex-col items-center gap-12 px-4`,
                className
            )}
        >
            {children}
        </section>
    );
};

// SECTION HEADER
const SectionContainerHeader: React.FC<SectionProps> = ({
    children,
    className,
}) => {
    return <div className={className}>{children}</div>;
};

const SectionContainerFooter : React.FC<SectionProps> = ({
    children,
    className,
}) => {
    return <div className={className}>{children}</div>;
};

// SECTION TITLE
interface SectionTitleProps extends HTMLMotionProps<"h2"> {
    children: React.ReactNode;
    className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <motion.h2
            className={twMerge(`font-bold font-bebas text-center`, className)}
            {...props}
        >
            {children}
        </motion.h2>
    );
};

// SECTION DESCRIPTION
interface SectionDescriptionProps extends HTMLMotionProps<"p"> {
    children: React.ReactNode;
    className?: string;
}
const SectionDescription: React.FC<SectionDescriptionProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <motion.p
            {...props}
            className={twMerge("text-center text-lg lg:text-3xl", className)}
        >
            {children}
        </motion.p>
    );
};

export {
    SectionContainer,
    SectionContainerHeader,
    SectionContainerFooter,
    SectionTitle,
    SectionDescription,
};
