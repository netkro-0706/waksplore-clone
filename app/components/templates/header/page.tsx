import Logo from "~/components/primitives/header/logo/page";
import styles from "./header.module.scss";
import SearchBarFeature from "~/components/features/header/search-bar/page";

export default function HeaderTemplate() {
  return (
    <div className={styles.headerWrapper}>
      <Logo />
      <SearchBarFeature />
    </div>
  );
}
