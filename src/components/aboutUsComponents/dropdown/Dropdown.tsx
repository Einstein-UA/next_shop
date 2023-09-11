'use client'

import styles from './dropdown.module.scss';
import {useContext, useState} from "react";
import { ThemeContext } from '@/context/themeContext';

interface Props {
    title: string,
    content: string,
    customTitleStyles?: object,
    customContentStyles?: object,
}
export default function Dropdown({ title, content, customTitleStyles, customContentStyles }:Props) {

    const [dropdownActive, setDropdownActive] = useState(false)

    const themeContext = useContext(ThemeContext);

    const handleClick = () => {
        setDropdownActive(!dropdownActive)
    }

    return (
        <div className={styles.dropdownWrapper}>
            <div onClick={handleClick} style={customTitleStyles ? customTitleStyles : {}} className={!dropdownActive ? styles.titleWrapper : `${styles.titleWrapper} ${styles.titleWrapperActive}`}>
                <p>{title}</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={themeContext.themeData ? 'black' : 'white'}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    className={!dropdownActive ? styles.arrowBtn : `${styles.arrowBtn} ${styles.arrowBtnActive}`}
                >
                    <polygon points="0,0 20,0 10,20" />
                </svg>

            </div>
            <div style={customContentStyles && dropdownActive? customContentStyles : {}} className={!dropdownActive ? styles.contentWrapper : `${styles.contentWrapper} ${styles.contentWrapperActive}`}>
                <p>{content}</p>
            </div>
        </div>
    )
}