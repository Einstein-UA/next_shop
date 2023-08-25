import LoginForm from '@/components/loginForm/LoginForm'
import styles from './login.module.scss'

export default function Login() {
    return(
        <div className={styles.loginWrapper}>
            <h1>Log In</h1>
            <LoginForm/>
        </div>
    )
}