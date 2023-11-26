import styles from "./copyright.module.scss";

export default function CopyRight() {
  return (
    <div className={styles.copyrightWrapper}>
      <p>Waksplorer · Songdo Incheon Korea (WakEntertainment Office )</p>
      <p>This is clone project of Waksplorer | 문의: contact.email.com</p>
      <p>Powered by Vercel</p>
    </div>
  );
}
