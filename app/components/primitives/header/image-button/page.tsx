import Image from "next/image";
import Link from "next/link";
import styles from "../_asset/styles.module.scss";
import { ImageButtonProps } from "../_asset/type";

export default function ImageButton({
  href,
  target = "_self",
  src,
  width,
  height,
  alt,
}: ImageButtonProps) {
  return (
    <div className={`${styles.imageButton} imageButton`}>
      <Link href={href} target={target}>
        <Image src={src} width={width} height={height} alt={alt} />
      </Link>
    </div>
  );
}
