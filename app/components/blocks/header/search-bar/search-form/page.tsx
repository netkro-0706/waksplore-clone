import { SearchButton } from "~/components/primitives/icon/index";
import styles from "~/components/blocks/header/_asset/styles.module.scss";
import SearchInput from "~/components/primitives/header/search-input/page";

export default function SearchFormBlock() {
  return (
    <div className={styles.searchFormWrapper}>
      <SearchInput />
      <SearchButton />
    </div>
  );
}
