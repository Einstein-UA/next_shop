'use client'

import styles from './LastInputsSymbol.module.scss'
import React, {useEffect, useState} from "react";
import {useFormContext} from "@/context/formContext";

export default function LastInputsSymbol() {

    const [winHeight, setWinHeight] = useState<number>(0);
    const [winWidth, setWinWidth] = useState<number>(0);

    const {lastEnteredSymbol, setLastEnteredSymbol, enteredInputsSymbols} = useFormContext()

    useEffect(() => {
        const winHeight = window.innerHeight;
        const winWidth = window.innerWidth;
        if (winHeight !== 0 && winWidth !== 0) {
            setWinHeight(winHeight);
            setWinWidth(winWidth);
        }
    }, []);

    const getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const getRandomValue = (min: any, max: any) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    const symbolStyles: any = {
        position: "fixed",
        top: `${getRandomValue(0, winHeight)}px`,
        left: `${getRandomValue(0, winWidth)}px`,
        color: getRandomColor(),
    };

    useEffect(() => {
        let timer: any;

        const updateTimer = () => {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                setLastEnteredSymbol([]);
            }, 500);
        };

        if (enteredInputsSymbols) {
            setLastEnteredSymbol([enteredInputsSymbols.slice(-1)[0]]);
            updateTimer();
        }

        return () => clearTimeout(timer);
    }, [enteredInputsSymbols]);

    return (
        <>
        {lastEnteredSymbol.map((el: any, index: number) => {
                return (
                    <h1
                        key={index}
                        style={lastEnteredSymbol && symbolStyles}
                        className={styles.lastSymbol}
                    >
                        {el}
                    </h1>
                );
            })}
        </>
    )
}