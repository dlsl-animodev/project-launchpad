import React from "react";

function cx(...vals: Array<string | false | null | undefined>) {
  return vals.filter(Boolean).join(" ");
}

type Variant = "primary" | "secondary" | "accent" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variantMap: Record<Variant, string> = {
  primary: "bg-primary text-foreground  hover:opacity-95",
  secondary: "bg-secondary border-black  hover:opacity-95",
  accent: "bg-accent text-white  hover:opacity-95",
  ghost: "bg-transparent text-foreground  hover:bg-primary/10",
  outline: "bg-transparent text-foreground border border-secondary hover:bg-secondary/5",
};

const sizeMap: Record<Size, string> = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const base = "inline-flex items-center justify-center  font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 border-retro";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
  const classes = cx(base, variantMap[variant], sizeMap[size], className || "");
    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
