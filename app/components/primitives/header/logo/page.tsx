import Image from "next/image";
import Link from "next/link";
import { ICON_SIZE } from "../../_asset/constants/page";
import styles from "../_asset/styles.module.scss";

export default function Logo() {
  return (
    <div className={styles.logoIcon}>
      <Link href={`/`}>
        <Image
          src={`/png/logo.png`}
          width={ICON_SIZE.LOGO.width}
          height={ICON_SIZE.LOGO.height}
          alt="main logo"
        />
      </Link>
    </div>
  );
}
