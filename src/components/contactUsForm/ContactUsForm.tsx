"use client";

import { useState, useEffect } from "react";
import styles from "./contactUsForm.module.scss";

interface FormDataType {
  name: string;
  email: string;
  message: string;
}

export default function ContactUsForm() {
  const [formData, setFormdata] = useState<FormDataType>({
    name: "",
    email: "",
    message: "",
  });
  const [formDataSymbols, setFormDataSymbols] = useState<string[]>([]);
  const [lastSymbol, setLastSymbol] = useState<string[]>([]);
  const [winHeight, setWinHeight] = useState(0);
  const [winWidth, setWinWidth] = useState(0);

  useEffect(() => {
    const winHeight = window.innerHeight;
    const winWidth = window.innerWidth;
    if(winHeight!== 0 && winWidth !== 0) {
      setWinHeight(winHeight)
      setWinWidth(winWidth)
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

    const getRandomScale = (min: any, max: any) => {
      return Math.floor(Math.random() * (max - min)) + min;
    };

    const symbolStyles: any = {
      position: "absolute",
      top: `${getRandomValue(200, winHeight - 500)}px`,
      left: `${getRandomValue(200, winWidth - 500)}px`,
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
    <div onSubmit={handleSubmit} className={styles.contactUsFormWrapper}>
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
      <form className={styles.formStyles}>
        <div className={styles.inputLabelWrapper}>
          <label htmlFor="userName">Name</label>
          <input
            onChange={handleChange}
            className={styles.inputStyles}
            value={formData.name}
            id="userName"
            name="name"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className={styles.inputLabelWrapper}>
          <label htmlFor="userEmail">Email</label>
          <input
            onChange={handleChange}
            className={styles.inputStyles}
            value={formData.email}
            id="userEmail"
            name="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className={styles.inputLabelWrapper}>
          <label htmlFor="userMessage">Message</label>
          <textarea
            onChange={handleChange}
            className={`${styles.inputStyles} ${styles.textarea}`}
            value={formData.message}
            id="userMessage"
            name="message"
            placeholder="How can we help you?"
          />
        </div>

        <button type="submit" onClick={handleSubmit}>
          <b>SUBMIT</b>
        </button>
      </form>
    </div>
  );
}
