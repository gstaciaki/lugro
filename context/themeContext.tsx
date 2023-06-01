import * as React from 'react';
import { lightTheme, darkTheme } from '../components/themeStyles';

export type Theme = 'light' | 'dark';

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = React.createContext<ThemeContextType | null>(null);

const ThemeProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [theme, setTheme] = React.useState<Theme>('light');
  const value = {
    theme: theme,
    toggleTheme: () => setTheme(theme === 'light' ? 'dark' : 'light'),
  };
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('This context must be used inside provider');
  }

  return context;
};

export const getThemeStyles = (theme: Theme) => {
  return theme === 'light' ? lightTheme : darkTheme;
};

export default ThemeProvider;
