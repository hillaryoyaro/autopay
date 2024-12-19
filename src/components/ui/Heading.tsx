import React from "react";

const sizes = {
  body_body_14: "text-[14px] font-medium",
  textxs: "text-[14px] font-medium",
  headingxs: "text-[10px] font-bold",
  headings: "text-[12px] font-extrabold",
  headingmd: "text-[14px] font-extrabold",
  headinglg: "text-[15px] font-extrabold",
  headingxl: "text-[16px] font-semibold",
  heading2xl: "text-[20px] font-bold",
  heading3xl: "text-[28px] font-bold md:text-[26px] sm:text-[24px]",
  heading4xl: "text-[40px] font-bold md:text-[38px] sm:text-[36px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "body_body_14",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-neutral-2 font-inter ${className} ${sizes[size] as keyof typeof sizes}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
