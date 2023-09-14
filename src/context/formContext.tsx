// 'use client'
// import React, {useContext, createContext, useState} from "react";
//
// interface FormContextProps {
//     isSubmitted: boolean,
//     setSubmitted: React.Dispatch<React.SetStateAction<boolean>>
// }
//
// const FormContext = createContext<FormContextProps>({
//     isSubmitted: false,
//     setSubmitted: () => {},
// })
//
// export const FormContextProvider = ({children}: any) => {
//     const [isSubmitted, setSubmitted] = useState(false)
//
//     return (
//         <FormContext.Provider value={{isSubmitted, setSubmitted}}>
//             {children}
//         </FormContext.Provider>
//     )
// }
//
// export const useFormContext = () => useContext(FormContext)


'use client'
import React, {useContext, createContext, useState} from "react";

interface FormValues {
    name: string;
    email: string;
    message: string;
    password: string;
    login: string;
}

interface FormContextProps {
    isSubmitted: boolean,
    setSubmitted: React.Dispatch<React.SetStateAction<boolean>>,
    formData: FormValues,
    setFormData: React.Dispatch<React.SetStateAction<FormValues>>,
    enteredInputsSymbols: [string],
    setEnteredInputsSymbols: React.Dispatch<React.SetStateAction<[string]>>,
    lastEnteredSymbol: [string],
    setLastEnteredSymbol: React.Dispatch<React.SetStateAction<[string]>>,
}


const FormContext = createContext<FormContextProps>({
    isSubmitted: false,
    setSubmitted: () => {
    },
    formData: {
        name: '',
        email: '',
        message: '',
        password: '',
        login: '',

    },
    setFormData: () => {
    },
    enteredInputsSymbols: [],
    setEnteredInputsSymbols: () => {
    },
    lastEnteredSymbol: [],
    setLastEnteredSymbol: () => {
    },
})

export const FormContextProvider = ({children}: any) => {
    const [enteredInputsSymbols, setEnteredInputsSymbols] = useState<string[]>([]);
    const [lastEnteredSymbol, setLastEnteredSymbol] = useState<string[]>([]);
    const [isSubmitted, setSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        password: "",
        login: "",
    });
    return (
        <FormContext.Provider value={{
            isSubmitted,
            setSubmitted,
            formData,
            setFormData,
            enteredInputsSymbols,
            setEnteredInputsSymbols,
            lastEnteredSymbol,
            setLastEnteredSymbol
        }}>
            {children}
        </FormContext.Provider>
    )
}

export const useFormContext = () => useContext(FormContext)