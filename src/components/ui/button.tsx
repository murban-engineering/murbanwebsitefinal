import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold tracking-wide ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "rounded-xl bg-primary text-primary-foreground shadow-[0_4px_14px_0_hsl(358_71%_35%/0.4),inset_0_1px_0_hsl(0_0%_100%/0.15)] before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-white/15 before:to-transparent before:pointer-events-none hover:shadow-[0_6px_20px_0_hsl(358_71%_35%/0.55),inset_0_1px_0_hsl(0_0%_100%/0.2)] hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 active:shadow-[0_2px_8px_0_hsl(358_71%_35%/0.4)]",
        destructive:
          "rounded-xl bg-destructive text-destructive-foreground shadow-[0_4px_14px_0_hsl(0_84%_60%/0.35),inset_0_1px_0_hsl(0_0%_100%/0.15)] before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-white/10 before:to-transparent before:pointer-events-none hover:brightness-110 hover:-translate-y-0.5",
        outline:
          "rounded-xl border border-primary/40 bg-background/80 text-foreground backdrop-blur-sm shadow-[0_2px_8px_0_hsl(0_0%_0%/0.06),inset_0_1px_0_hsl(0_0%_100%/0.8)] before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-white/50 before:to-transparent before:pointer-events-none hover:border-primary/70 hover:text-primary hover:shadow-[0_4px_14px_0_hsl(358_71%_35%/0.15)] hover:-translate-y-0.5",
        secondary:
          "rounded-xl bg-secondary text-secondary-foreground shadow-[0_4px_14px_0_hsl(227_55%_24%/0.4),inset_0_1px_0_hsl(0_0%_100%/0.15)] before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-white/10 before:to-transparent before:pointer-events-none hover:brightness-110 hover:-translate-y-0.5",
        ghost:
          "rounded-xl hover:bg-primary/8 hover:text-primary transition-colors",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-4 py-1.5 text-xs",
        lg: "h-12 px-8 py-3 text-base",
        icon: "h-10 w-10 rounded-xl",
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
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
