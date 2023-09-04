'use client'

import { createContext, useContext } from "react";
import { useToggle } from "../hooks/useToggle";

interface ContextProps {
  isBanerActive: boolean;
  setBanerActive: React.Dispatch<React.SetStateAction<boolean>>;
}
const LogoConext = createContext<ContextProps>({
  isBanerActive: false,
  setBanerActive: () => {},
});

export const LogoProvider = ({ children }: any) => {
  const [isBanerActive, setBanerActive] = useToggle(false);

  return (
    <LogoConext.Provider value={{ isBanerActive, setBanerActive }}>
      {children}
    </LogoConext.Provider>
  );
};

export const useLogoContext = () => useContext(LogoConext);
