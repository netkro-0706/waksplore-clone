import Image from "next/image";
import { ICON_SIZE } from "~/components/primitives/_asset/constants/page";
import styles from "./logo.module.scss";

export default function UnionLogo() {
  const { UNION_LOGO } = ICON_SIZE;

  return (
    <div className={styles.unionLogoWrapper}>
      <Image
        src="/png/union-logo.png"
        width={UNION_LOGO.width}
        height={UNION_LOGO.height}
        style={{ opacity: 0.25 }}
        alt={"union-logo"}
      />
    </div>
  );
}
