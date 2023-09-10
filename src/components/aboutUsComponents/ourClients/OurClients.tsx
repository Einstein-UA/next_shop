'use client'

import styles from './ourClients.module.scss'
import Slider from "@/components/aboutUsComponents/slider/Slider";

export default function OurClients() {


    return (
        <div className={styles.ourClients}>

            <h2>Testimonials</h2>

            <Slider/>

        </div>
    )
}




