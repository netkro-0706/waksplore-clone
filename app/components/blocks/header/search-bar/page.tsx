import CafeButton from "~/components/primitives/header/cafebutton/page";
import SearchFormBlock from "./search-form/page";
import styles from "../_asset/styles.module.scss";

export default function SearchBarBlock() {
  return (
    <div className={styles.searchBarWrapper}>
      <SearchFormBlock />
      <span>|</span>
      <CafeButton />
    </div>
  );
}
