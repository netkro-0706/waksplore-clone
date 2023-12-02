import styles from "./header.module.scss";
import SearchBarFeature from "~/components/features/header/search-bar/page";
import { ICON_SIZE } from "~/components/primitives/_asset/constants/page";
import ImageButton from "~/components/primitives/header/image-button/page";

export default function HeaderTemplate() {
  return (
    <div className={styles.headerWrapper}>
      <ImageButton
        href="/"
        src="/png/logo.png"
        width={ICON_SIZE.LOGO.width}
        height={ICON_SIZE.LOGO.height}
        alt="logo"
      />
      <SearchBarFeature />
    </div>
  );
}
