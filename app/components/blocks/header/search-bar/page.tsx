import SearchFormBlock from "./search-form/page";
import styles from "../_asset/styles.module.scss";
import { ICON_SIZE } from "~/components/primitives/_asset/constants/page";
import LinkButton from "~/components/primitives/header/button/link-button/page";

export default function SearchBarBlock() {
  return (
    <div className={styles.searchBarWrapper}>
      <SearchFormBlock />
      <span>|</span>
      <LinkButton
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
