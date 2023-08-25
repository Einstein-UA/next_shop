"use client";

import { useState, useEffect } from "react";
import styles from "./input.module.scss";

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
  const [formData, setFormdata] = useState<FormValues>({
    Name: "",
    Email: "",
    Message: "",
    Password: "",
  });
  const [formDataSymbols, setFormDataSymbols] = useState<string[]>([]);
  const [lastSymbol, setLastSymbol] = useState<string[]>([]);
  const [winHeight, setWinHeight] = useState<number>(0);
  const [winWidth, setWinWidth] = useState<number>(0);

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
    position: "absolute",
    top: `${getRandomValue(0, winHeight - 500)}px`,
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
        setLastSymbol([]);
      }, 500);
    };

    if (formDataSymbols) {
      setLastSymbol([formDataSymbols.slice(-1)[0]]);
      updateTimer();
    }

    return () => clearTimeout(timer);
  }, [formDataSymbols]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
    setFormDataSymbols((prev) => [...prev, value.charAt(value.length - 1)]);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      {lastSymbol.map((el: any, index: number) => {
        return (
          <h1
            key={index}
            style={lastSymbol && symbolStyles}
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
