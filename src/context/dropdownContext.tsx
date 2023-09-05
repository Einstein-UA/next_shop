'use client'

import { createContext, useContext } from "react";
import { useToggle } from "../hooks/useToggle";

interface ContextProps {
  isActive: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}
const DropdownConext = createContext<ContextProps>({
  isActive: false,
  setActive: () => {},
});

export const DropdownProvider = ({ children }: any) => {
  const [isActive, setActive] = useToggle(false);

  return (
    <DropdownConext.Provider value={{ isActive, setActive }}>
      {children}
    </DropdownConext.Provider>
  );
};

export const useDropdownProvider = () => useContext(DropdownConext);
