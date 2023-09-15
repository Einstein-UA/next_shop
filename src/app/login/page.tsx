import styles from './login.module.scss'
import Form from "@/components/form/Form";

export default function Login() {
    return(
        <div className={styles.loginWrapper}>
            <h1>LOG IN</h1>
            <Form formID='loginForm' namePresent={false} emailPresent={false} messagePresent={false}/>
        </div>
    )
}