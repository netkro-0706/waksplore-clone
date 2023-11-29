import styles from "../_asset/styles.module.scss";

export default function SearchInput() {
  return (
    <div className={styles.searchInputWrapper}>
      <input placeholder="Search in WakZoo" />
    </div>
  );
}
