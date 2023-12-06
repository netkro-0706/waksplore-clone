import * as React from "react";
import { Ref, forwardRef } from "react";
import { ICON_SIZE } from "../_asset/constants/page";
import { SvgrProps } from "./_asset/type";
const SvgSearch = (props: SvgrProps, ref: Ref<SVGSVGElement>) => {
  const { width, height, size, color, excss } = props;
  const _width = size ? ICON_SIZE[size].width : width;
  const _height = size ? ICON_SIZE[size].height : height;

  return (
    <button type="submit">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
        className="search_svg__h-5 search_svg__w-5 searchSvg"
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
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
          fill={color}
        />
      </svg>
    </button>
  );
};
const SearchButton = forwardRef(SvgSearch);
export default SearchButton;
