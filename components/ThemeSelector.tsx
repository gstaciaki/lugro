import React from 'react';
import { useTheme } from '../context/themeContext';
import { Text, TouchableOpacity } from 'react-native';

interface ThemeSelectorProps { 
    children: React.ReactNode; 
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ children }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <TouchableOpacity  onPress={() => toggleTheme()}>
          <Text>{theme}</Text>
        </TouchableOpacity>
    );
};

export default ThemeSelector;
