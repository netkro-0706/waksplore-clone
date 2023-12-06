import * as React from "react";
import { Ref, forwardRef } from "react";
import { SvgrProps } from "./_asset/type";
import { ICON_SIZE } from "../_asset/constants/page";
const SvgNotification = (props: SvgrProps, ref: Ref<SVGSVGElement>) => {
  const { width, height, size, color, excss } = props;
  const _width = size ? ICON_SIZE[size].width : width;
  const _height = size ? ICON_SIZE[size].height : height;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
      className="notification_svg__h-4 notification_svg__w-4"
      viewBox="0 0 24 24"
      excss={excss}
      width={_width}
      height={_height}
      ref={ref}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-9-3.75h.008v.008H12z"
        color={color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNotification);
export default ForwardRef;
