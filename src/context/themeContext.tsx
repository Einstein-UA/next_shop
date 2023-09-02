"use client";

import { createContext, useState, useEffect } from "react";

interface ContextType {
  themeData: boolean | null;
  setThemeData: React.Dispatch<React.SetStateAction<boolean | null>>;
}

export const ThemeContext = createContext<ContextType>({
  themeData: null,
  setThemeData: () => {},
});

export function ThemeProvider({ children }: any) {
  const [themeData, setThemeData] = useState<boolean | null>(null);

  useEffect(() => {
    const data = window.localStorage.getItem("THEME_MODE");
    if (data) {setThemeData(JSON.parse(data))}
  }, []);

  useEffect(() => {
    window.localStorage.setItem("THEME_MODE", JSON.stringify(themeData));
  }, [themeData]);

  return (
    <ThemeContext.Provider value={{ themeData, setThemeData }}>
      <div className={themeData !== null ? `theme${themeData ? "White" : "Dark"}` : 'displayNone'}>{children}</div>
    </ThemeContext.Provider>
  );
}
