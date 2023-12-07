import { Meta, StoryFn } from "@storybook/react";
import * as icon from "../icon";
import { SvgrProps } from "./_asset/type";

export default {
  title: "Primitives/Icons",
  parameters: {
    docs: {
      description: {
        component: `SVGRコンポーネント`,
      },
    },
  },
} as Meta;

const iconList = [
  {
    name: "Notification",
    component: <icon.Notification />,
  },
  {
    name: "RightArrow",
    component: <icon.RightArrow />,
  },
  {
    name: "SearchButton",
    component: <icon.Search />,
  },
];

const IconList = () => {
  return (
    <div>
      {iconList.map(({ name, component }) => {
        return (
          <div
            key={name}
            style={{ width: "40px", height: "40px", marginTop: "30px" }}
          >
            <h6 style={{ marginBottom: "5px" }}>{name}</h6>
            {component}
          </div>
        );
      })}
    </div>
  );
};

export const Icon: StoryFn = IconList.bind({});
Icon.storyName = "Icon一覧";
