import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:relative [&_svg]:z-10 relative overflow-hidden text-center",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:text-primary-foreground before:absolute before:inset-0 before:bg-primary-foreground/20 before:-translate-x-full hover:before:translate-x-0 before:transition-transform before:duration-500",
        primary: "bg-primary text-white hover:text-white before:absolute before:inset-0 before:bg-white/20 before:-translate-x-full hover:before:translate-x-0 before:transition-transform before:duration-500",
        destructive: "bg-destructive text-destructive-foreground hover:text-destructive-foreground before:absolute before:inset-0 before:bg-destructive-foreground/20 before:-translate-x-full hover:before:translate-x-0 before:transition-transform before:duration-500",
        outline: "border border-input bg-transparent text-foreground hover:text-foreground before:absolute before:inset-0 before:bg-accent before:-translate-x-full hover:before:translate-x-0 before:transition-transform before:duration-500",
        secondary: "bg-secondary text-secondary-foreground hover:text-secondary-foreground before:absolute before:inset-0 before:bg-secondary-foreground/20 before:-translate-x-full hover:before:translate-x-0 before:transition-transform before:duration-500",
        ghost: "text-foreground hover:text-foreground before:absolute before:inset-0 before:bg-accent before:-translate-x-full hover:before:translate-x-0 before:transition-transform before:duration-500",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp 
        className={cn(buttonVariants({ variant, size, className }))} 
        ref={ref} 
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {props.children}
        </span>
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
