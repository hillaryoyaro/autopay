"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  variant?: string;
  colorScheme?: string;
}

interface IconProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const inputVariants = cva("w-full flex items-center justify-center cursor-text text-[14px]", {
  variants: {
    outline: {
      neutral_5: "border-neutral-5 border border-solid text-neutral-4",
      text_8: "border-text-8 border border-solid text-neutral-4",
    },
    size: {
      md: "h-[54px] px-3 text-[14px]",
      xs: "h-[18px] px-3 text-[14px]",
      sm: "h-[40px] px-2.5 text-[14px]",
    },
    shape: {
      square: "rounded-[0px]",
      round: "rounded",
    },
  },
  defaultVariants: {},
});

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant = "outline", colorScheme = "neutral_5", shape, size = "sm", className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ [variant]: colorScheme, size, shape, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

const InputGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className={cn("relative flex w-full", className)} {...props} ref={ref}>
        {children}
      </div>
    );
  },
);
InputGroup.displayName = "InputGroup";

const InputLeftElement = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn("absolute aspect-square h-full left-0 justify-center flex items-center", className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  },
);
InputLeftElement.displayName = "InputLeftElement";

const InputRightElement = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn("absolute aspect-square h-full right-0 justify-center flex items-center", className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  },
);
InputRightElement.displayName = "InputRightElement";

export { Input, InputGroup, InputLeftElement, InputRightElement };
