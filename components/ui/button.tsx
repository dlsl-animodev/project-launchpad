"use client";

import React from "react";
import { HTMLMotionProps, motion } from "motion/react";

function cx(...vals: Array<string | false | null | undefined>) {
    return vals.filter(Boolean).join(" ");
}

type Variant = "primary" | "secondary" | "accent" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: Variant;
    size?: Size;
}

const variantMap: Record<Variant, string> = {
    primary: "bg-primary text-foreground hover:opacity-95",
    secondary: "bg-[#a57c52] border-black hover:opacity-95",
    accent: "bg-accent text-white hover:opacity-95",
    ghost: "bg-transparent text-foreground hover:bg-primary/10",
    outline:
        "bg-transparent text-foreground border border-secondary hover:bg-secondary/5",
};

const sizeMap: Record<Size, string> = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
};

const base =
    "font-righteous tracking-wide inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 border-retro";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        { className, variant = "primary", size = "md", children, ...props },
        ref
    ) => {
        const classes = cx(
            base,
            variantMap[variant],
            sizeMap[size],
            className || ""
        );

        return (
            <motion.button
                ref={ref}
                className={classes}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);

Button.displayName = "Button";

export default Button;
