'use client'

import styles from './form.module.scss'
import React, {useState} from "react";

import {useFormContext} from "@/context/formContext";
import LastInputsSymbol from "@/components/form/lastInputsSymbol/LastInputsSymbol";

interface Props {
    id: string
    namePresent?: boolean,
    emailPresent?: boolean,
    messagePresent?: boolean
    loginPresent?: boolean
    passwordPresent?: boolean
}

interface ValidateFormData {
    name: string,
    email: string,
    message: string,
    login: string,
    password: string,
}


export default function Form({
                                 id,
                                 namePresent = true,
                                 emailPresent = true,
                                 messagePresent = true,
                                 loginPresent = true,
                                 passwordPresent = true
                             }: Props) {

    const {formData, setFormData, setEnteredInputsSymbols} = useFormContext()
    const [isErrors, setErrors] = useState<ValidateFormData>({
        name: '',
        email: '',
        message: '',
        login: '',
        password: '',
    })


    const validateForm = () => {
        let isValid = true;

        if (id === 'contactUsForm' && formData.name.length < 2) {
            isValid = false;
            // setErrors(name = "Name must be at least 2 characters long.");
        }

        // const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        // if (!emailPattern.test(email)) {
        //     isValid = false;
        //     errors.email = "Invalid email address.";
        // }
        //
        // if (message.length < 10) {
        //     isValid = false;
        //     errors.message = "Message must be at least 10 characters long.";
        // }

        return {isValid};
    };


    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData(prevData => ({...prevData, [name]: value.trim()}));
        setEnteredInputsSymbols(prev => [...prev, value.charAt(value.length - 1)] as string[]);
        setErrors({
            ...isErrors,
            [name]: ""
        });
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Перевірка на заповненість обов'язкових полів
        // if (!formData.name || !formData.email || !formData.message || !formData.login || !formData.password) {
        //     alert('Please fill in all fields');
        //     return;
        // }
        // Ваш код для відправлення форми

        if (formData.name.length < 2) {
            setErrors({
                ...isErrors,
                name: "Minimum 2 characters "
            });
            return;
        }
    }

    console.log(isErrors)

    return (
        <div className={styles.formWrapper}>
            <LastInputsSymbol/>
            <form id={id} className={styles.form}>
                {namePresent && <div className={styles.inputLabelWrapper}>
                    <label htmlFor='name'>Name</label>
                    <input
                        onChange={onHandleChange}
                        value={formData.name}
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
                        value={formData.email}
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
                        value={formData.message}
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
                        value={formData.login}
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
                        value={formData.password}
                        type='password'
                        id='password'
                        className={styles.input}
                        name='password'
                        placeholder='Enter your password'
                    />
                    <span className={styles.error}>{isErrors.password}</span>
                </div>}

                <button onClick={handleSubmit}>SUBMIT</button>
            </form>
        </div>
    )
}