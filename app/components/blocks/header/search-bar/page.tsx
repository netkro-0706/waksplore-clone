import SearchFormBlock from "./search-form/page";
import styles from "../_asset/styles.module.scss";
import ImageButton from "~/components/primitives/header/image-button/page";
import { ICON_SIZE } from "~/components/primitives/_asset/constants/page";

export default function SearchBarBlock() {
  return (
    <div className={styles.searchBarWrapper}>
      <SearchFormBlock />
      <span>|</span>
      <ImageButton
        href={`https://cafe.naver.com/steamindiegame`}
        target="_blank"
        src={`/png/naver-cafe.png`}
        width={ICON_SIZE.CAFE.width}
        height={ICON_SIZE.CAFE.height}
        alt="cafe button"
      />
    </div>
  );
}
