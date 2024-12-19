"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  variant?: string;
  asChild?: boolean;
  colorScheme?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const buttonVariants = cva(
  "w-full flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap",
  {
    variants: {
      gradient: {
        deep_orange_700_01_yellow_900_01: "bg-gradient shadow-xs text-white-a700",
      },
      fill: {
        gray_50: "bg-gray-50",
        green_50: "bg-green-50",
      },
      size: {
        sm: "h-[54px] px-[34px] text-[16px]",
        xs: "h-[44px] px-1",
      },
      shape: {
        circle: "rounded-[50%]",
        round: "rounded-[10px]",
      },
    },
    defaultVariants: {},
  },
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      colorScheme = "gray_50",
      variant = "gradient",
      shape,
      size = "xs",
      children,
      leftIcon,
      rightIcon,
      className,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp className={cn(buttonVariants({ [variant]: colorScheme, size, shape, className }))} ref={ref} {...props}>
        {!!leftIcon && leftIcon}
        {children}
        {!!rightIcon && rightIcon}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
