"use client";

import { useState } from "react";
import styles from './loginForm.module.scss'

export default function LoginForm() {

  const [formData, setFormdata] = useState([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={styles.loginFormWrapper}>
      <form className={styles.formStyles}>
        <div className={styles.inputLabelWrapper}>
          <label htmlFor="userEmail">Email</label>
          <input
            className={styles.inputStyles}
            id="userEmail"
            name="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className={styles.inputLabelWrapper}>
          <label htmlFor="userPassword">Password</label>
          <input
            className={styles.inputStyles}
            id="userPassword"
            name="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          <b>SUBMIT</b>
        </button>
      </form>
    </div>
  );
}