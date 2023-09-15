'use client'

import styles from './form.module.scss'
import React, {useState} from "react";

import {useFormContext} from "@/context/formContext";
import LastInputsSymbol from "@/components/form/lastInputsSymbol/LastInputsSymbol";
import {TimerOptions} from "timers";

interface FormProps {
    formID: string
    namePresent?: boolean,
    emailPresent?: boolean,
    messagePresent?: boolean
    loginPresent?: boolean
    passwordPresent?: boolean
}

interface ErrorsProps {
    name: string,
    email: string,
    message: string,
    login: string,
    password: string,
}


export default function Form({
                                 formID,
                                 namePresent = true,
                                 emailPresent = true,
                                 messagePresent = true,
                                 loginPresent = true,
                                 passwordPresent = true
                             }: FormProps) {

    const {
        isSubmitted,
        setSubmitted,
        loginFormData,
        contactUsFormData,
        setLoginFormData,
        setContactUsFormData,
        setLastEnteredSymbol
    } = useFormContext()

    const [isErrors, setErrors] = useState<ErrorsProps>({
        name: '',
        email: '',
        message: '',
        login: '',
        password: '',
    })


    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        let timeout: NodeJS.Timeout
        if (timeout) {
            clearTimeout(timeout)
        }

        if (formID === 'contactUsForm') {
            setContactUsFormData(prevData => ({...prevData, [name]: value}));
        }
        if (formID === 'loginForm') {
            setLoginFormData(prevData => ({...prevData, [name]: value}));
        }

        setLastEnteredSymbol([value.charAt(value.length - 1)]);

        setErrors({
            ...isErrors,
            [name]: ""
        });
        return () => clearTimeout(timeout)
    }


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let isValid = true;
        const newErrors = {
            name: '',
            email: '',
            message: '',
            login: '',
            password: '',
        };
        const setFormSubmittedById = (id, value) => {
            setSubmitted(prevState => ({...prevState, [id]: value}));
        };

        if (formID === 'contactUsForm') {
            if (!contactUsFormData.name) {
                isValid = false;
                newErrors.name = "Field required";
            } else if (contactUsFormData.name.length < 2) {
                isValid = false;
                newErrors.name = "Minimum 2 characters";
            }

            if (!contactUsFormData.email) {
                isValid = false;
                newErrors.email = "Field required";
            } else if (!emailPattern.test(contactUsFormData.email)) {
                isValid = false;
                newErrors.email = "Invalid email address";
            }

            if (!contactUsFormData.message) {
                isValid = false;
                newErrors.message = "Field required";
            } else if (contactUsFormData.message.length < 15) {
                isValid = false;
                newErrors.message = "Minimum 15 characters";
            }
        }

        if (formID === 'loginForm') {
            if (!loginFormData.login) {
                isValid = false;
                newErrors.login = "Field required";
            } else if (loginFormData.login.length < 4) {
                isValid = false;
                newErrors.login = "Minimum 4 characters";
            }

            if (!loginFormData.password) {
                isValid = false;
                newErrors.password = "Field required";
            } else if (loginFormData.password.length < 8) {
                isValid = false;
                newErrors.password = "Minimum 8 characters";
            }
        }

        setErrors(newErrors);

        if (isValid && formID === 'contactUsForm') {
            setTimeout(() => {
                setContactUsFormData({
                    name: '',
                    email: '',
                    message: '',
                })
                setFormSubmittedById(formID, true);
            }, 1000)
        }

        if (isValid && formID === 'loginForm') {
            setTimeout(() => {
                setLoginFormData({
                    login: '',
                    password: '',
                })
                setFormSubmittedById(formID, true);
            }, 1000)
        }

    }

    return (
        <div className={styles.formWrapper}>
            <LastInputsSymbol/>
            <form id={formID} className={styles.form}>
                {namePresent && <div className={styles.inputLabelWrapper}>
                    <label htmlFor='name'>Name</label>
                    <input
                        onChange={onHandleChange}
                        value={contactUsFormData.name}
                        type='text'
                        id='name'
                        className={styles.input}
                        name='name'
                        placeholder='Enter your name'
                    />
                    <span className={styles.error}>{isErrors.name}</span>
                </div>}
                {emailPresent && <div className={styles.inputLabelWrapper}>
                    <label htmlFor='email'>Email</label>
                    <input
                        onChange={onHandleChange}
                        value={contactUsFormData.email}
                        type='email'
                        id='email'
                        className={styles.input}
                        name='email'
                        placeholder='Enter your email'
                    />
                    <span className={styles.error}>{isErrors.email}</span>
                </div>}
                {messagePresent && <div className={styles.inputLabelWrapper}>
                    <label htmlFor='message'>Message</label>
                    <textarea
                        onChange={onHandleChange}
                        value={contactUsFormData.message}
                        id='message'
                        className={`${styles.input} ${styles.textarea}`}
                        name='message'
                        placeholder='Enter your message'
                    />
                    <span className={styles.error}>{isErrors.message}</span>
                </div>}
                {loginPresent && <div className={styles.inputLabelWrapper}>
                    <label htmlFor='login'>Login</label>
                    <input
                        onChange={onHandleChange}
                        value={loginFormData.login}
                        type='text'
                        id='login'
                        className={styles.input}
                        name='login'
                        placeholder='Enter your login'
                    />
                    <span className={styles.error}>{isErrors.login}</span>
                </div>}
                {passwordPresent && <div className={styles.inputLabelWrapper}>
                    <label htmlFor='password'>Password</label>
                    <input
                        onChange={onHandleChange}
                        value={loginFormData.password}
                        type='password'
                        id='password'
                        className={styles.input}
                        name='password'
                        placeholder='Enter your password'
                    />
                    <span className={styles.error}>{isErrors.password}</span>
                </div>}
                {isSubmitted[formID] && <span className={styles.submittedSuccessfully}>Successfully submitted</span>}
                <button disabled={isSubmitted[formID]} onClick={handleSubmit}>SUBMIT</button>
            </form>
        </div>
    )
}