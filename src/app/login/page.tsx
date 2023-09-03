import styles from "./login.module.scss";
import InputComponent from "../../components/formAllComponents/InputComponent";
import SubmitBtnComponent from "../../components/formAllComponents/SubmitBtnComponent";

export default function Login() {
  return (
    <div className={styles.mainFormWrapper}>
      <h1>Log In</h1>

      <div className={styles.formWrapper}>
        <form className={styles.formStyles}>
          <InputComponent
            inputStyle={styles.inputStyles}
            id="userLogin"
            name="Login"
            type="text"
            placeholder="Login"
          />

          <InputComponent
            inputStyle={styles.inputStyles}
            id="userPassword"
            name="Password"
            type="password"
            placeholder="Password"
          />

          <SubmitBtnComponent />
        </form>
      </div>
    </div>
  );
}
