import React, { ReactElement, ReactNode } from "react";
import { clsx } from "clsx";
import { ButtonClassName } from "../utils";

export type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button = ({ children, onClick, className, ...props }: ButtonProps) => {
  return (
    <button className={clsx(`${ButtonClassName}`, className)} {...props}>
      <i className="relative not-italic text-[25px] uppercase">{children}</i>
    </button>
  );
};

export default Button;
