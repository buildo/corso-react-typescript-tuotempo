import { ComponentProps } from "react";
import { buttonStyle, buttonVariantStyle } from "./Button.css";
import { LocalizedString } from "../models";
import clsx from "clsx";

type Props = {
  variant?: "regular" | "negative";
  children: LocalizedString;
} & Omit<ComponentProps<"button">, "children">;

export function Button({ variant = "regular", className, ...props }: Props) {
  return (
    <button
      {...props}
      className={clsx(className, buttonStyle, buttonVariantStyle[variant])}
    />
  );
}
