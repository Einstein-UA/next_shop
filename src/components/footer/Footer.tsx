import RocetComponent from "../rocetComponent/RocetComponent";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
        
      <RocetComponent />
      <p className={styles.description}>© 2023 by Ruslan Nikolaiets. React Next.js project.</p>
    </footer>
  );
}
