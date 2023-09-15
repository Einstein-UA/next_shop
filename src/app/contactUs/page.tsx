import styles from './contactUs.module.scss'
import Form from "@/components/form/Form";

export default function ContactUs() {
    return (
        <div className={styles.contactUsWrapper}>
            <h1>CONTACT US</h1>
            <Form formID='contactUsForm' passwordPresent={false} loginPresent={false}/>
        </div>
    )
}