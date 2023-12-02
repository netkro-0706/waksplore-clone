import styles from "../_asset/styles.module.scss";
import { SearchInputProps } from "../_asset/type";

function SearchInput({
  searchText,
  handlerInputChange,
  placeholder,
}: SearchInputProps) {
  return (
    <div className={styles.searchInputWrapper}>
      <input
        type="text"
        value={searchText}
        onChange={handlerInputChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default SearchInput;
