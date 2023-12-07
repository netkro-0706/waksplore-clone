import Image from "next/image";
import styles from "../_asset/styles.module.scss";
import { BaseButtonProps, DynamicButtonProps } from "../_asset/type";

export default function DynamicButton({
  src,
  width,
  height,
  alt,
  buttonType,
}: DynamicButtonProps & BaseButtonProps) {
  return (
    <div className={`${styles.Button} DynamicButton`}>
      <button type={buttonType}>
        <Image src={src} width={width} height={height} alt={alt} />
      </button>
    </div>
  );
}
