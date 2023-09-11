'use client'
import React, {useContext, createContext, useState} from "react";
interface FormValues {
    Name: string;
    Email: string;
    Message: string;
    Password: string;
}
interface FormContextProps {
    isSubmitted: boolean,
    setSubmitted: React.Dispatch<React.SetStateAction<boolean>>,
    formData: FormValues,
    setFormData: React.Dispatch<React.SetStateAction<object>>,
}


const FormContext = createContext<FormContextProps>({
    isSubmitted: false,
    setSubmitted: () => {},
    formData: {
        Name: '',
        Email: '',
        Message: '',
        Password: '',
    },
    setFormData: () => {},

})

export const FormContextProvider = ({children}: any) => {
    const [isSubmitted, setSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        Name: "",
        Email: "",
        Message: "",
        Password: "",
    });
    return (
        <FormContext.Provider value={{isSubmitted, setSubmitted, formData, setFormData}}>
            {children}
        </FormContext.Provider>
    )
}

export const useFormContext = () => useContext(FormContext)