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
import {useToggle} from "@/hooks/useToggle";
import {useEffect, useState, useRef, useContext} from "react";
import {ThemeContext} from '@/context/themeContext'


const Slider = () => {

    const [containerHeight, setContainerHeight] = useState<Array<number>>([])
    const [scrollHeight, setScrollHeight] = useState<Array<number>>([])
    const [swiperInstance, setSwiperInstance] = useState<any>(null);
    const [isBtnClicked, setBtnClicked] = useState(false)

    const prevBtn = useRef<any>(null);
    const nextBtn = useRef<any>(null);

    const themeContext = useContext(ThemeContext)

    const onHandleSlide = () => {
        setBtnClicked(true)
    }
    console.log(swiperInstance)
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            speed={500}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
                prevEl: prevBtn.current,
                nextEl: nextBtn.current,
            }}

            pagination={{clickable: true}}
            loop={true}
            autoplay={{delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true}}
            allowTouchMove={true}
            onSwiper={setSwiperInstance}
            className={styles.swiperStyles}
        >

            {clientData.map((el, index) => {
                const [isActive, setActive] = useToggle(false)
                const ref = useRef<any>(null)
                useEffect(() => {
                    const refEl = ref.current
                    if (refEl) {
                        setScrollHeight(prev => [...prev, refEl.scrollHeight]);

                        setContainerHeight(prev => [...prev, refEl.clientHeight]);
                    }
                }, [])

                useEffect(() => {
                    if(isBtnClicked) {
                        setActive(false)
                        if (swiperInstance) {
                            swiperInstance.autoplay.start();
                        }
                        setBtnClicked(false)
                    }
                },[isBtnClicked])

                const onHandleClick = () => {
                    setActive(true)
                    if (swiperInstance) {
                        swiperInstance.autoplay.stop();
                    }
                }
                const onHandleUnActive = () => {
                    setActive(false)
                    if (swiperInstance) {
                        swiperInstance.autoplay.start();
                    }
                }

                return (
                    <SwiperSlide key={el.id} className={styles.slideStyle}>
                        <div className={styles.clientItem}>
                            <div className={styles.avatarWrapper}>
                                <Image src={el.url} alt='Avatar' width={50} height={50}/>
                            </div>
                            <div className={styles.fitBackWrapper}>
                                <div ref={ref} className={styles.fitBack}>
                                    <p>{el.fitBack}</p>
                                    {scrollHeight[index] > containerHeight[index] ?
                                        <button onClick={onHandleClick} className={styles.moreBtn}><b>...more</b>
                                        </button> : ''}
                                    {isActive ?
                                        <div style={{background: themeContext.themeData ? 'white' : 'black'}}
                                             onDoubleClick={onHandleUnActive} className={styles.moreBtnActiveContent}>
                                            <svg
                                                onClick={onHandleUnActive}
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill={themeContext.themeData ? 'black' : 'white'}
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className={styles.closeButton}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M6 18L18 6M6 6l12 12"></path>
                                            </svg>
                                            <p>{el.fitBack}</p>
                                        </div>
                                        : ''}
                                </div>
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

            <div ref={prevBtn} className={`${styles.sliderBtn} ${styles.prevBtn}`}>
                <svg
                    onClick={onHandleSlide}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke={themeContext.themeData ? 'black' : 'white'}
                    viewBox="0 0 32 32"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height={130}
                >
                    <path d="M16 25l-9-9 9-9"/>
                </svg>
            </div>
            <div ref={nextBtn} className={`${styles.sliderBtn} ${styles.nextBtn}`}>
                <svg
                    onClick={onHandleSlide}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke={themeContext.themeData ? 'black' : 'white'}
                    viewBox="0 0 32 32"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height={130}
                >
                    <path d="M8.5 25l9-9-9-9"/>
                </svg>
            </div>
        </Swiper>
    );
};

export default Slider;