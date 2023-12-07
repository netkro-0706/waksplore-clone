import { ICON_SIZE } from "../../_asset/constants/page";

export type IconSizeType = keyof typeof ICON_SIZE;

export type SvgrProps = Partial<{
  width: number;
  height: number;
  size: IconSizeType;
  color: string;
  excss: string;
}>;
