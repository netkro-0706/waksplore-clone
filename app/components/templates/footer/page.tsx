import FooterFeature from "~/components/features/footer/page";
import styles from "./footer.module.scss";

export default function FooterTemplate() {
  return (
    <div className={styles.templateWrapper}>
      <FooterFeature />
    </div>
  );
}
