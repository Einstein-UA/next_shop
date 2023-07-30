import FormComponent from '@/components/formComponent/FormComponent'
import styles from './contactUs.module.scss'

export default function ContactUs() {

    const formChildren = (
    <div>
        <input type='text' placeholder='Name'/>
    </div>
    )
    return(
        <div className={styles.contactUsWrapper}>
            <h1>ContactUs</h1>
            <FormComponent inputs={formChildren}/>
        </div>
    )
}