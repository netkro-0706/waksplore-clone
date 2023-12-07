import { Meta, StoryFn } from "@storybook/react";
import DynamicButton from "./page";
import { BaseButtonProps, DynamicButtonProps } from "../_asset/type";

export default {
  component: DynamicButton,
  title: "Primitives/DynamicButton",
} as Meta;

const Template: StoryFn<DynamicButtonProps & BaseButtonProps> = (args) => (
  <DynamicButton {...args} />
);

export const Button = Template.bind({});
Button.args = {
  src: "/png/logo.png",
  width: 30,
  height: 30,
  alt: "Dynamic button",
  buttonType: "button",
};

export const Reset = Template.bind({});
Reset.args = {
  src: "/png/logo.png",
  width: 30,
  height: 30,
  alt: "Dynamic button",
  buttonType: "reset",
};

export const Submit = Template.bind({});
Submit.args = {
  src: "/png/logo.png",
  width: 30,
  height: 30,
  alt: "Dynamic button",
  buttonType: "submit",
};
