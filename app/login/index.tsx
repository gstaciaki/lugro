import { useRouter } from 'expo-router';
import React, { useContext, useState } from 'react'
import { View, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
import { Polygon, Svg } from 'react-native-svg';
import styles from './styles';
import defaultStyles from '../styles';
import LoginForm from '../../components/loginForm'
import useAuth from '../../hook/useAuth';
import { getThemeStyles, useTheme } from '../../context/themeContext';
import ThemeSelector from '../../components/ThemeSelector';

export default function Index() {
  const router = useRouter();
  const { loading, user, login, logout } = useAuth();
  const { theme } = useTheme();
  const { bgColor, bgSvgColor } = getThemeStyles(theme);

  const handleSignIn = async (
    email: string,
    password: string,
  ) => {
    await login(email, password);
    router.push({
      pathname: "/home",
      params: {
        email: email
      }
    })

  };



  if (login.length > 0) {
    return (
      <ScrollView style={{ backgroundColor: bgColor }}>
        <View style={[styles.header, { backgroundColor: bgColor }]}>
          <Svg height="100%" width="100%" viewBox="0 27 100 100" style={{ position: 'absolute' }}>
            <Polygon points="0,0 100,0 100,55 75,75 0,60" fill={bgSvgColor} />
          </Svg>
          <View style={[defaultStyles.logoContainer, {height: 250}]}>
            <Image source={require('../../assets/LugRo_logo.png')}></Image>
          </View>
          <View style={styles.body}>
            <KeyboardAvoidingView behavior={'padding'}>
              <LoginForm onClickSignIn={handleSignIn} />
            </KeyboardAvoidingView>
          </View>
        </View>

        <ThemeSelector>
        </ThemeSelector>
      </ScrollView>
    )
  }

  return null;
}