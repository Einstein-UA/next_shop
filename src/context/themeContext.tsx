"use client";

import React, { createContext, useState, useEffect } from "react";

interface ContextType {
  themeData: boolean | null;
  setThemeData: React.Dispatch<React.SetStateAction<boolean | null>>;
}

export const ThemeContext = createContext<ContextType>({
  themeData: null,
  setThemeData: () => {},
});

export function ThemeContextProvider({ children }: any) {

  const [themeData, setThemeData] = useState<boolean | null>(null);

  useEffect(() => {
    const storedData: any = window.localStorage.getItem("THEME_MODE");
    setThemeData(storedData !== null ? JSON.parse(storedData) : false);
  }, []);

  useEffect(() => {
    if (themeData !== null) {
      window.localStorage.setItem("THEME_MODE", JSON.stringify(themeData));
    }
  }, [themeData]);

  if (themeData === null) {
    return null; 
  }

  return (
    <ThemeContext.Provider value={{ themeData, setThemeData }}>
      <div className={`theme${themeData ? "White" : "Dark"}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}