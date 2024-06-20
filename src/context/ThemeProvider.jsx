import React from "react";
export const THEME_LIGHT = "light";
export const THEME_DARK = "dark";
export const THEME_NEITRAL = "neitral";

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = React.useState(null);

  const changeTheme = (name) => {
    setTheme(name);
  };
  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        change: changeTheme,
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => React.useContext(ThemeContext);
