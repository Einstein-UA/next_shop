import styles from './aboutUs.module.scss'
import OurClients from "@/components/aboutUsComponents/ourClients/OurClients";
import Faq from "@/components/aboutUsComponents/faq/Faq";
import Dropdown from "@/components/aboutUsComponents/dropdown/Dropdown";
import { ourCompanyData } from '@/data/clientData'

export default function AboutUs() {
    return (
        <div className={styles.aboutUsWrapper}>
            <h1>About Us</h1>

            <Dropdown title={ourCompanyData.title} content={ourCompanyData.content}/>

            <OurClients />

            <Faq />

        </div>
    )
}