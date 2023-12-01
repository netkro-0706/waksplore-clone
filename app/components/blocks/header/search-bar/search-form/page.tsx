import styles from "~/components/blocks/header/_asset/styles.module.scss";
import SearchInput from "~/components/primitives/header/search-input/page";
import SearchButtonBlock from "./search-buton/page";

export default function SearchFormBlock() {
  return (
    <div className={styles.searchFormWrapper}>
      <SearchInput />
      <SearchButtonBlock />
    </div>
  );
}
