import { Meta, StoryFn } from "@storybook/react";
import "../_asset/styles.module.scss";
import { ICON_SIZE } from "../../_asset/constants/page";
import { ImageButtonProps } from "../_asset/type";
import ImageButton from "./page";

export default {
  component: ImageButton,
  title: "Primitives/header/ImageButton",
} as Meta;

const Template: StoryFn<ImageButtonProps> = (args) => <ImageButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: "#",
  src: "/png/logo.png",
  width: 30,
  height: 30,
  alt: "image button",
};

export const Logo = Template.bind({});
Logo.args = {
  href: "/",
  src: "/png/logo.png",
  width: ICON_SIZE.LOGO.width,
  height: ICON_SIZE.LOGO.height,
  alt: "logo",
};

export const Cafe = Template.bind({});
Cafe.args = {
  href: `https://cafe.naver.com/steamindiegame`,
  target: "_blank",
  src: "/png/naver-cafe.png",
  width: ICON_SIZE.CAFE.width,
  height: ICON_SIZE.CAFE.height,
  alt: "cafe-button",
};
