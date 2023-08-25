import ContactUsForm from '@/components/contactUsForm/ContactUsForm'
import styles from './contactUs.module.scss'

export default function ContactUs() {
    return(
        <div className={styles.contactUsWrapper}>
            <h1>Contact Us</h1>
            <ContactUsForm/>   
        </div>
    )
}