import styles from "./header.module.scss";
import Image from "next/image";
import logo1 from "../../images/header/logo1.png";
import logo2 from "../../images/header/logo2.png";
import ThemeButton from "./themeButtonComponent/ThemeButton";
import NavLinkComponent from "./navLinkComponent/NavLinkComponent";
import CartLinkComponent from "../cartComponents/cartLinkComponent/CartLinkComponent";
import DropDownBtn from "./dropDownMenuComponent/DropDownMenu";

export default function Header() {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.logoWrapper}>
        <Image
          className={styles.logo1}
          src={logo1}
          width={50}
          height={60}
          alt="logo1"
        />
        <Image
          className={styles.logo2}
          src={logo2}
          width={100}
          height={30}
          alt="logo2"
        />
      </div>
      <div className={styles.navbarWrapper}>
        <NavLinkComponent navTo={"/"} title={"HOME"} />
        <NavLinkComponent navTo={"/products"} title={"STORE"} />
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
