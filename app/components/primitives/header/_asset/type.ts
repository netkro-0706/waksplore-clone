import { ChangeEvent, HTMLAttributeAnchorTarget } from "react";

export type SearchInputProps = {
  searchText: string;
  handlerInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};
