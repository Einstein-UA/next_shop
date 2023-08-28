"use client";

import { createContext, useState } from "react";

interface ContextType {
  themeData: boolean;
  setThemeData: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ContextType>({
  themeData: false,
  setThemeData: () => {},
});

export function ThemeProvider({ children }: any) {
  const [themeData, setThemeData] = useState(false);

  return (
    <ThemeContext.Provider value={{ themeData, setThemeData }}>
      <div className={`theme${themeData ? "White" : "Dark"}`}>{children}</div>
    </ThemeContext.Provider>
  );
}
