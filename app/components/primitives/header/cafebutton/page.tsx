import Image from "next/image";
import { ICON_SIZE } from "../../_asset/constants/page";
import Link from "next/link";
import styles from "../_asset/styles.module.scss";

export default function CafeButton() {
  return (
    <div className={styles.cafeButton}>
      <Link href={`https://cafe.naver.com/steamindiegame`}>
        <Image
          src={`/png/naver-cafe.png`}
          width={ICON_SIZE.CAFE.width}
          height={ICON_SIZE.CAFE.height}
          alt="cafe"
        />
      </Link>
    </div>
  );
}
