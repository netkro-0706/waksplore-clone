import { HTMLAttributeAnchorTarget, HTMLAttributes } from "react";

export type BaseButtonProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type LinkButtonProps = {
  href: string;
  target?: HTMLAttributeAnchorTarget | undefined;
};

export type DynamicButtonProps = {
  buttonType: "submit" | "reset" | "button";
};
