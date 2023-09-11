import styles from "./ourCompany.module.scss";
import Dropdown from "@/components/aboutUsComponents/dropdown/Dropdown";
import { ourCompanyData } from '@/data/clientData'

export default function OurCompany () {
    return (
        <div className={styles.firstBlock}>

            <Dropdown title={ourCompanyData.title} content={ourCompanyData.content}/>

        </div>
    )
}