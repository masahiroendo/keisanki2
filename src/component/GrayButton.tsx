import { clsx } from "clsx";
import Button from "./Button";
import { ButtonProps } from "./Button";
import { LightGrayButtonClassName } from "../utils";

const LightGrayButton = ({ className, ...props }: ButtonProps) => {
  return (
    <Button
      className={clsx(`${LightGrayButtonClassName}`, className)}
      {...props}
    />
  );
};

export default LightGrayButton;
