import React, { useState, createContext } from "react";

const themes = {
  darkMode: {
    backgroundColor: "#333333",
    color: "#999999",
  },
  lightMode: {
    backgroundColor: "#999999",
    color: "#333333",
  },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const theme = isDarkMode ? themes.darkMode : themes.lightMode;
  const toogleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <ThemeContext.Provider value={[{ theme, isDarkMode }, toogleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
