import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <p className={styles.description}>© 2023 by Ruslan Nikolaiets. React Next.js project.</p>
    </footer>
  );
}
