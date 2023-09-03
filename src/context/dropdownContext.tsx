'use client'

import { createContext, useContext } from "react";
import { useToggle } from "../hooks/useToggle";

interface ContextProps {
  isActive: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}
const DropdowConext = createContext<ContextProps>({
  isActive: false,
  setActive: () => {},
});

export const DropdownProvider = ({ children }: any) => {
  const [isActive, setActive] = useToggle(false);

  return (
    <DropdowConext.Provider value={{ isActive, setActive }}>
      {children}
    </DropdowConext.Provider>
  );
};

export const useDropdownProvider = () => useContext(DropdowConext);
