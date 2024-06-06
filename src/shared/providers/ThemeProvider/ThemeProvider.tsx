import { FC, ReactNode, useCallback, useMemo, useState } from 'react';

import { ThemeContext, ThemeContextType, ThemeType } from './ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from './constants';

export type ThemeProviderProps = {
  children: ReactNode;
};

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeType ?? 'dark';

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(defaultTheme);

  const toggleTheme = useCallback(() => {
    setTheme(currentTheme => {
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
      return newTheme;
    });
  }, []);

  const themeContextValue: ThemeContextType = useMemo(() => ({
    theme,
    toggleTheme,
  }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
