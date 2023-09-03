import styles from "./contactUs.module.scss";
import InputComponent from "@/components/formAllComponents/InputComponent";
import SubmitBtnComponent from "@/components/formAllComponents/SubmitBtnComponent";

export default function ContactUs() {
  return (
    <div className={styles.mainFormWrapper}>
      <h1>Contact Us</h1>

      <div className={styles.formWrapper}>
       <form className={styles.formStyles}>

            <InputComponent
              inputStyle={styles.inputStyles}
              id="userName"
              placeholder="Enter your name"
              name="Name"
              type="text"
            />

            <InputComponent
              inputStyle={styles.inputStyles}
              id="userEmail"
              name="Email"
              type="email"
              placeholder="Enter your email"
            />

            <InputComponent
              inputStyle={`${styles.inputStyles} ${styles.textarea}`}
              id="userMessage"
              name="Message"
              type="text"
              placeholder="How can we help you?"
              textarea={true}
            />
        
          <SubmitBtnComponent/>

        </form> 
      </div> 
    </div>
  );
}
