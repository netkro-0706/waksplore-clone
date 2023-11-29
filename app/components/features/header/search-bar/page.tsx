import SearchBarBlock from "~/components/blocks/header/search-bar/page";
import styles from "../_asset/styles.module.scss";

export default function SearchBarFeature() {
  return (
    <div className={styles.searchBarWrapper}>
      <SearchBarBlock />
    </div>
  );
}
