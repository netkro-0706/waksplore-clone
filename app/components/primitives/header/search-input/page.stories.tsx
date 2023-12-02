import { ChangeEvent, useEffect, useState } from "react";
import { SearchInputProps } from "../_asset/type";
import SearchInput from "./page";
import { Meta, StoryFn } from "@storybook/react";
import "../_asset/styles.module.scss";

export default {
  component: SearchInput,
  title: "Primitives/header/SearchInput",
} as Meta;

const Template: StoryFn<SearchInputProps> = (args) => {
  const [searchText, setSearchText] = useState("");
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <SearchInput
      {...args}
      searchText={searchText}
      handlerInputChange={handleInputChange}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "please input text",
};

export const WAKZOO = Template.bind({});
WAKZOO.args = {
  placeholder: "Search in WakZoo",
};
