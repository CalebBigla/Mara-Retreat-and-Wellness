import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-12 items-center justify-center gap-2 border px-6 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "border-primary bg-primary text-primary-foreground hover:border-accent hover:bg-accent hover:text-accent-foreground",
        light:
          "border-primary-foreground bg-primary-foreground text-primary hover:bg-transparent hover:text-primary-foreground",
        outlineLight:
          "border-primary-foreground/50 bg-transparent text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary",
        outline:
          "border-border bg-transparent text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground",
        link: "min-h-0 border-0 p-0 text-foreground underline-offset-8 hover:underline",
        ghost:
          "border-transparent bg-transparent px-3 text-foreground hover:bg-secondary",
      },
      size: {
        default: "h-12",
        large: "h-14 px-8",
        icon: "size-12 px-0",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

export function Button({
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}