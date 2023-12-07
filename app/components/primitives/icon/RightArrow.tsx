import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { ICON_SIZE } from "../_asset/constants/page";
import { SvgrProps } from "./_asset/type";
const SvgRightArrow = (props: SvgrProps, ref: Ref<SVGSVGElement>) => {
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
      className="right-arrow_svg__invisible right-arrow_svg__h-4 right-arrow_svg__w-4 right-arrow_svg__-translate-x-1/2 right-arrow_svg__opacity-0 right-arrow_svg__transition-all right-arrow_svg__group-hover:visible right-arrow_svg__group-hover:translate-x-0 right-arrow_svg__group-hover:opacity-100"
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
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
        fill={color}
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgRightArrow);
export default ForwardRef;
