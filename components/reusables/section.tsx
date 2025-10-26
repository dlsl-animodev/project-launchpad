import { twMerge } from "tailwind-merge";
import { HTMLMotionProps, motion } from "motion/react";

// ACTUAL SECTION
interface SectionProps extends HTMLMotionProps<"section"> {
    children: React.ReactNode;
    className?: string;
    withDefaultClasses?: boolean;
}
const SectionContainer: React.FC<SectionProps> = ({
    children,
    className,
    withDefaultClasses = true,
    ...props
}) => {
    return (
        <motion.section
            className={twMerge(
                `${
                    withDefaultClasses
                        ? "flex flex-col items-center gap-12 px-4"
                        : ""
                }`,
                className
            )}
            {...props}
        >
            {children}
        </motion.section>
    );
};

// SECTION HEADER
const SectionContainerHeader: React.FC<SectionProps> = ({
    children,
    className,
}) => {
    return <div className={className}>{children}</div>;
};

// SECTION MAIN
const SectionContainerMain: React.FC<SectionProps> = ({
    children,
    className,
}) => {
    return <div className={className}>{children}</div>;
};

// SECTION FOOTER
const SectionContainerFooter: React.FC<SectionProps> = ({
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
            className={twMerge(`font-bold font-bebas text-center tracking-wide text-7xl md:text-8xl`, className)}
            {...props}
        >
            {children}
        </motion.h2>
    );
};

const SectionContainerSubHeading: React.FC<SectionTitleProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <motion.h3
            className={twMerge(`font-bold font-bebas text-center text-7xl`, className)}
            {...props}
        >
            {children}
        </motion.h3>
    );
}

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
            className={twMerge(
                "text-center text-lg md:text-2xl lg:text-3xl",
                className
            )}
        >
            {children}
        </motion.p>
    );
};

export {
    SectionContainer,
    SectionContainerHeader,
    SectionContainerMain,
    SectionContainerFooter,
    SectionTitle,
    SectionContainerSubHeading,
    SectionDescription,
};
