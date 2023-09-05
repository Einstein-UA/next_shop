import BannerComponent from "../bannerComponent/BannerComponent";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
        
      <BannerComponent />
      <p className={styles.description}>© 2023 by Ruslan Nikolaiets. React Next.js project.</p>
    </footer>
  );
}
