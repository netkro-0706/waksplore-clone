import Image from "next/image";
import Link from "next/link";
import styles from "../_asset/styles.module.scss";
import { BaseButtonProps, LinkButtonProps } from "../_asset/type";

export default function LinkButton({
  href,
  target = "_self",
  src,
  width,
  height,
  alt,
}: LinkButtonProps & BaseButtonProps) {
  return (
    <div className={`${styles.Button} linkButton`}>
      <Link href={href} target={target}>
        <Image src={src} width={width} height={height} alt={alt} />
      </Link>
    </div>
  );
}
