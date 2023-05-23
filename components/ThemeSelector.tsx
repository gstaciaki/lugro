import React from 'react';
import { useTheme } from '../context/themeContext';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import themeStyles from './themeStyles';
import { StyleSheet } from "react-native";




interface ThemeSelectorProps { 
    children: React.ReactNode; 
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ children }) => {
    const { theme, toggleTheme } = useTheme();
    const bgColor = theme == 'dark' ? '#666666' : '#ecdb97';
    const image = theme == 'dark' ? require('../assets/moon.png') : require('../assets/sun.png');
    const imageSize = theme == 'dark' ? 50 : 35;
    const textAlign = theme == 'dark' ? 14 : 7;


    return (
        <TouchableOpacity style={[themeStyles.button , {backgroundColor: bgColor}]} onPress={() => toggleTheme()}>
            <View style={{flexDirection:"row", width:80}}>
                <View style={{flex:1}}><Image style={[themeStyles.img, {height: imageSize, width: imageSize}]}source={image} /></View>
                <View style={{flex:1,}}><Text style={[themeStyles.text, {marginTop: textAlign}]}>{theme}</Text></View>
            </View>
        </TouchableOpacity>
    );
};



export default ThemeSelector;
