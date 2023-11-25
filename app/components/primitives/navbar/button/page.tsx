import Link from "next/link";
import styles from "./button.module.scss";
import { ButtonProps } from "./type";

export default function Button({ text, href }: ButtonProps) {
  return (
    <div className={styles.button}>
      <Link href={href}>{text}</Link>
    </div>
  );
}
