'use client'

import { createContext, useContext } from "react";
import { useToggle } from "@/hooks/useToggle";

interface ContextProps {
  isBannerActive: boolean;
  setBannerActive: React.Dispatch<React.SetStateAction<boolean>>;
}
const LogoContext = createContext<ContextProps>({
  isBannerActive: false,
  setBannerActive: () => {},
});

export const LogoProvider = ({ children }: any) => {
  const [isBannerActive, setBannerActive] = useToggle(false);

  return (
    <LogoContext.Provider value={{ isBannerActive, setBannerActive }}>
      {children}
    </LogoContext.Provider>
  );
};

export const useLogoContext = () => useContext(LogoContext);
