import { ComponentProps } from "react";
import { buttonStyle } from "./Button.css";
import clsx from "clsx";

export function Button(props: ComponentProps<"button">) {
  return <button {...props} className={clsx(props.className, buttonStyle)} />;
}
