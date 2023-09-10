"use client"

import styles from './swiper.module.scss';
import Image from "next/image";
import {clientData} from "@/data/clientData";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import yellowStar from '../../../images/aboutUs/yellowStar.webp'
import grayStar from '../../../images/aboutUs/grayStar.webp'

const Slider = () => {


    return (
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{clickable: true}}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className={styles.swiperStyles}
            >
                {clientData.map(el => {
                    return (
                        <SwiperSlide key={el.id} className={styles.slideStyle}>
                            <div
                                  className={styles.clientItem}>
                                <div className={styles.avatarWrapper}>
                                    <Image src={el.url} alt='Avatar' width={50} height={50}/>
                                </div>
                                <div className={styles.fitBackWrapper}>
                                    <p>{el.fitBack}</p>
                                </div>
                                <div className={styles.starsWrapper}>
                                    {[...Array(el.stars)].map((_, index) => (
                                        <Image key={index} src={yellowStar} alt='Star' width={20} height={20}/>
                                    ))}
                                    {[...Array(5 - el.stars)].map((_, index) => (
                                        <Image key={index} src={grayStar} alt='Star' width={20} height={20}/>
                                    ))}
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
    );
};

export default Slider;