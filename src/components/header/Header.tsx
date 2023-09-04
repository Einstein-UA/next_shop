import styles from "./header.module.scss";
import ThemeButton from "./themeButtonComponent/ThemeButton";
import NavLinkComponent from "./navLinkComponent/NavLinkComponent";
import CartLinkComponent from "../cartComponents/cartLinkComponent/CartLinkComponent";
import DropDownBtn from "./dropDownMenuComponent/DropDownMenu";
import LogoComponent from "./logoComponent/LogoComponent";
import RocetComponent from "../rocetComponent/RocetComponent";

export default function Header() {
  return (
    <header className={styles.headerWrapper}>
      <RocetComponent position="top" />

      <LogoComponent />

      <div className={styles.navbarWrapper}>
        <NavLinkComponent navTo={"/"} title={"STORE"} />
        <NavLinkComponent navTo={"/aboutUs"} title={"ABOUT US"} />
        <NavLinkComponent navTo={"/contactUs"} title={"CONTACT US"} />
        <NavLinkComponent navTo={"/login"} title={"LOG IN"} />
      </div>

      <div className={styles.themeButtonCartgWrapper}>
        <ThemeButton />
        <CartLinkComponent navTo={"/cart"} />
      </div>
      <DropDownBtn />
    </header>
  );
}
