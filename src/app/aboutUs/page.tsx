import styles from './aboutUs.module.scss'
import OurClients from "@/components/aboutUsComponents/ourClients/OurClients";
import Faq from "@/components/aboutUsComponents/faq/Faq";
import OurCompany from "@/components/aboutUsComponents/ourCompany/OurCompany";

export default function AboutUs() {
    return (
        <div className={styles.aboutUsWrapper}>
            <h1>About Us</h1>

            <OurCompany/>

            <OurClients />

            <Faq />

        </div>
    )
}