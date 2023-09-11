"use client"

import styles from './faq.module.scss'
import {faqData} from '@/data/clientData'
import Dropdown from "@/components/aboutUsComponents/dropdown/Dropdown";

export default function Faq() {

    const customTitleStyles = {
        textAlign: "center",
    }
    const customContentStyles = {
        height: '80px',
        textAlign: "center",
    }

    return (
        <div className={styles.faqWrapper}>
            <h2>FAQ</h2>
            {faqData.map((el, index) => {
                return (
                    <div key={index}>
                        <Dropdown
                            customContentStyles={customContentStyles}
                            customTitleStyles={customTitleStyles}
                            title={el.question}
                            content={el.answer}
                        />
                    </div>
                )
            })}
        </div>
    )
}