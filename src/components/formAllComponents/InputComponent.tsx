"use client";

import { useState, useEffect } from "react";
import styles from "./input.module.scss";
import { useFormContext } from '../../context/formContext'

interface Props {
  inputStyle: string;
  id: string;
  name: string;
  type?: string;
  placeholder: string;
  textarea?: boolean;
}

interface FormValues {
  Name: string;
  Email: string;
  Message: string;
  Password: string;
}

export default function InputComponent({
  inputStyle,
  id,
  name,
  type,
  placeholder,
  textarea,
}: Props) {

  const [formData, setFormData] = useState<FormValues>({
    Name: "",
    Email: "",
    Message: "",
    Password: "",
  });

  const [enteredInputsSymbols, setEnteredInputsSymbols] = useState<string[]>([]);
  const [lastEnteredSymbol, setLastEnteredSymbol] = useState<string[]>([]);
  const [winHeight, setWinHeight] = useState<number>(0);
  const [winWidth, setWinWidth] = useState<number>(0);

  const {isSubmitted} = useFormContext()

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


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setEnteredInputsSymbols(prev => [...prev, value.charAt(value.length - 1)]);
  };

  console.log(formData)
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
      {!textarea ? (
        <div className={styles.inputLabelWrapper}>
          <label htmlFor={id}>{name}</label>
          <input
            onChange={handleChange}
            value={formData[name as keyof FormValues]}
            className={inputStyle}
            id={id}
            name={name}
            type={type} 
            placeholder={placeholder}
          />
        </div>
      ) : (
        <div className={styles.inputLabelWrapper}>
          <label htmlFor={id}>{name}</label>
          <textarea
            onChange={handleChange}
            value={formData[name as keyof FormValues]}
            className={inputStyle}
            id={id}
            name={name}
            placeholder={placeholder}
          />
        </div>
      )}
    </>
  );
}
