import * as React from 'react';
import { Theme, ThemeContextType } from '../@types/theme';
interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = React.createContext<ThemeContextType | null>(null);

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeMode, setThemeMode] = React.useState<Theme>('claro');
  return <ThemeContext.Provider value={{ theme: themeMode, changeTheme: setThemeMode }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
