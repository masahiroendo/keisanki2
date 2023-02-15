import {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
  FC,
  ReactElement,
} from "react";

type ThemeName = "dark" | "light";

export type UseThemeContextType = {
  theme: ThemeName;
  switchTheme: () => void;
};

const ThemeContext = createContext<UseThemeContextType>(
  {} as UseThemeContextType
);

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeContextProvider: FC<PropsWithChildren> = ({
  children,
}): ReactElement => {
  const [theme, setTheme] = useState<ThemeName>("dark");

  const switchTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      <div className={theme === "dark" ? "light" : "dark"}>{children}</div>
    </ThemeContext.Provider>
  );
};
