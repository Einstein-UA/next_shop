'use client'

import styles from './LastInputsSymbol.module.scss'
import React, {useEffect, useState} from "react";
import {useFormContext} from "@/context/formContext";

export default function LastInputsSymbol() {

    const [winHeight, setWinHeight] = useState<number>(0);
    const [winWidth, setWinWidth] = useState<number>(0);

    const {lastEnteredSymbol, setLastEnteredSymbol} = useFormContext()

    useEffect(() => {
        const winHeight = window.innerHeight;
        const winWidth = window.innerWidth;
        if (winHeight !== 0 && winWidth !== 0) {
            setWinHeight(winHeight);
            setWinWidth(winWidth);
        }
    }, []);

    useEffect(() => {
        let timeout
        timeout = setTimeout(() => {
            setLastEnteredSymbol([])
        }, 450)
        return () => clearTimeout(timeout)
    }, [lastEnteredSymbol])



    const getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const getRandomPosition = (min: any, max: any) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    const symbolStyles: any = {
        top: `${getRandomPosition(0, winHeight)}px`,
        left: `${getRandomPosition(0, winWidth)}px`,
        color: getRandomColor(),
    };

    return (
        <>
            {lastEnteredSymbol.map((el: any, index: number) => {
                return (
                    <h1
                        key={index}
                        style={symbolStyles}
                        className={styles.lastSymbol}
                    >
                        {el}
                    </h1>
                );
            })}
        </>
    )
}