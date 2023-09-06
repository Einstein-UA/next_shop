"use client";

import styles from "./navLinkComponent.module.scss";
import React, {SetStateAction, useContext, useEffect, useState} from "react";
import {ThemeContext} from "@/context/themeContext";
import {ReactNode} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    navTo: string,
    title: string | ReactNode,
    setAction?: any,
    firstRenderLinkColor?: boolean,
    setFirstRenderLinkColor?: React.Dispatch<SetStateAction<boolean>>
}

export default function NavLink({navTo, title, setAction}: Props) {
    const [currentURL, setCurrentURL] = useState("/");
    usePathname()
    const pathname = usePathname()
    useEffect(() => {
        setCurrentURL(pathname);
    }, [pathname]);

    const themeContext = useContext(ThemeContext);

    const handleClick = () => {
        if (setAction) {
            setAction(false);
        }
    };

    return (
        <div className={styles.nawLinkWrapper}>
            <Link
                onClick={handleClick}
                className={
                  themeContext.themeData
                    ? `${styles.navLinkWhiteTheme} ${currentURL===navTo && styles.activeColorLink}`
                    : `${styles.navLinkDarkTheme} ${currentURL===navTo && styles.activeColorLink}`
                }

                href={navTo}
            >
                {title}
            </Link>
        </div>
    );
}
