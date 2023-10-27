import { ComponentProps } from "react";
import { buttonStyle, buttonVariantStyle } from "./Button.css";
import clsx from "clsx";

type Props = {
  variant?: "regular" | "negative";
} & ComponentProps<"button">;

export function Button({ variant = "regular", className, ...props }: Props) {
  return (
    <button
      {...props}
      className={clsx(className, buttonStyle, buttonVariantStyle[variant])}
    />
  );
}
