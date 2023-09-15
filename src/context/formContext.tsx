'use client'
import React, {useContext, createContext, useState} from "react";

interface LoginFormValues {
    password: string;
    login: string;
}
interface ContactUsFormValues {
    name: string;
    email: string;
    message: string;
}

interface FormContextProps {
    isSubmitted: any,
    setSubmitted: React.Dispatch<React.SetStateAction<any>>,
    loginFormData: LoginFormValues,
    setLoginFormData: React.Dispatch<React.SetStateAction<LoginFormValues>>,
    contactUsFormData: ContactUsFormValues,
    setContactUsFormData: React.Dispatch<React.SetStateAction<ContactUsFormValues>>,
    lastEnteredSymbol: string[],
    setLastEnteredSymbol: React.Dispatch<React.SetStateAction<string[]>>,
}


const FormContext = createContext<FormContextProps>({
    isSubmitted: false,
    setSubmitted: () => {
    },
    loginFormData: {
        password: '',
        login: '',
    },
    setLoginFormData: () => {
    },
    contactUsFormData: {
        name:  '',
        email:  '',
        message:  '',
    },
    setContactUsFormData: () => {},
    lastEnteredSymbol: [],
    setLastEnteredSymbol: () => {
    },
})

export const FormContextProvider = ({children}: any) => {
    const [lastEnteredSymbol, setLastEnteredSymbol] = useState<string[]>([]);
    const [isSubmitted, setSubmitted] = useState(false)
    const [loginFormData, setLoginFormData] = useState({
        password: "",
        login: "",
    });
    const [contactUsFormData, setContactUsFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    return (
        <FormContext.Provider value={{
            isSubmitted,
            setSubmitted,
            loginFormData,
            setLoginFormData,
            contactUsFormData,
            setContactUsFormData,
            lastEnteredSymbol,
            setLastEnteredSymbol,
        }}>
            {children}
        </FormContext.Provider>
    )
}

export const useFormContext = () => useContext(FormContext)