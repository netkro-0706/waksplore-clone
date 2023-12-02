import { ChangeEvent, HTMLAttributeAnchorTarget } from "react";

export type SearchInputProps = {
  searchText: string;
  handlerInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

export type ImageButtonProps = {
  href: string;
  target?: HTMLAttributeAnchorTarget | undefined;
  src: string;
  width: number;
  height: number;
  alt: string;
};
