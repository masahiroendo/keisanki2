import { clsx } from "clsx";
import Button from "./Button";
import { ButtonProps } from "./Button";
import { GrayButtonClassName } from "../utils";

const LightGrayButton = ({ className, ...props }: ButtonProps) => {
  return (
    <Button className={clsx(`${GrayButtonClassName}`, className)} {...props} />
  );
};

export default LightGrayButton;
