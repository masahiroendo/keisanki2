import React from "react";
import { clsx } from "clsx";
import Button from "./Button";
import { ButtonProps } from "./Button";
import { OrangeButtonClassName } from "../utils";

const OrangeButton = ({
  className,
  selected,
  ...props
}: ButtonProps & { selected?: boolean }) => {
  return (
    <Button
      className={clsx(
        selected
          ? ` hover:brightness-[120%] ${OrangeButtonClassName}`
          : `${OrangeButtonClassName}`,
        className
      )}
      {...props}
    />
  );
};

export default OrangeButton;
