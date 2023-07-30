import styles from "./header.module.scss";
import Image from "next/image";
import cartWhiteTheme from "../../images/header/cart.png";
import cartDarkTheme from "../../images/header/cartDark.png";
import logo1 from "../../images/header/logo1.png";
import logo2 from "../../images/header/logo2.png";
import ThemeButton from "./themeButton/ThemeButton";
import NavLinkComponent from "./navLink/NavLinkComponent";
import CartLinkComponent from "./cartLink/CartLinkComponent";
import SearchComponent from "./search/SearchComponent";
import DropdownCategories from "./categories/DropdownCategories";
import DropdownItemsPerPage from "./itemsPerPage/DropdownItemsPerPage";

export default function Header() {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.logoWrapper}>
        <Image src={logo1} width={50} height={60} alt="logo1" />
        <Image className={styles.logo2} src={logo2} width={100} height={30} alt="logo2" />
      </div>
      <div className={styles.navbarWrapper}>
        <NavLinkComponent navTo={"/"} title={"HOME"} />
        <NavLinkComponent navTo={"/products"} title={"STORE"} />
        <NavLinkComponent navTo={"/aboutUs"} title={"ABOUT US"} />
        <NavLinkComponent navTo={"/contactUs"} title={"CONTACT US"} />
        <NavLinkComponent navTo={"/login"} title={"Log In"} />
      </div>

      <div className={styles.siteConfigWrapper}>
        <ThemeButton />

        <div className={styles.searchDropdownWrapper}>
          <SearchComponent />
          <div className={styles.dropDownWrapper}>
            <DropdownItemsPerPage />
            <DropdownCategories />
          </div>
        </div>

        <CartLinkComponent
          content2={
            <Image src={cartDarkTheme} width={50} height={40} alt="Cart" />
          }
          content1={
            <Image src={cartWhiteTheme} width={50} height={40} alt="Cart" />
          }
          navTo={"/cart"}
        />
      </div>
    </header>
  );
}
