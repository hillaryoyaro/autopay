"use client";
import React from "react";
import { Root, Indicator } from "@radix-ui/react-checkbox";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { cva, VariantProps } from "class-variance-authority";

const checkboxVariants = cva("", {
  variants: {
    primary: {
      selected: "",
      unselected: " ",
    },
    size: {
      xs: "h-[20px] w-[20px]",
    },
  },
  defaultVariants: {
    size: "xs",
  },
});
interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof Root>, VariantProps<typeof checkboxVariants> {
  variant?: string;
  label?: string;
}
const Checkbox = React.forwardRef<React.ElementRef<typeof Root>, CheckboxProps>(
  ({ className, label, variant = "primary", size, id, ...props }, ref) => {
    return (
      <div className={cn("flex items-center gap-[5px] cursor-pointer", className)}>
        <Root
          ref={ref}
          className={cn(
            "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#0275FF] data-[state=checked]:text-primary-foreground flex justify-center items-center",
            checkboxVariants({ [variant]: "unselected", size }),
          )}
          {...props}
          id={id}
        >
          <Indicator
            className={cn(
              "flex items-center justify-center text-current h-4/5 w-4/5",
              checkboxVariants({ [variant]: "selected" }),
            )}
          >
            <Check className={cn("h-full w-full text-[#fff]")} />
          </Indicator>
        </Root>
        <label htmlFor={id}>{label}</label>
      </div>
    );
  },
);
Checkbox.displayName = Root.displayName;

export { Checkbox };
