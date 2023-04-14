import { useRouter } from 'expo-router';
import React from 'react'
import { View,  Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { Polygon, Svg } from 'react-native-svg';
import styles from './styles';
import LoginForm from '../../components/loginForm'

export default function Index() {

  const router = useRouter()

  const handleSignIn  = (
    email: string,
    password: string,
    remember: boolean
  ) => {
    console.log("Bem-vindo de Volta!");
    router.push({
      pathname: "/home",
    });
  };

  return (
    <ScrollView style={{backgroundColor: '#EEEFFD'}}>
     <View style={styles.header}>

      <Svg height="100%" width="100%" viewBox="0 27 100 100" style={{ position: 'absolute' }}>
        <Polygon
          points="0,0 100,0 100,55 75,75 0,60"
          fill="#8870E6"
        />
      </Svg>

        <Image style={styles.logoContainer} source={require("../../assets/LugRo_logo.png")}></Image>
      <View style={styles.body}>
        <KeyboardAvoidingView behavior={'padding'}>
          <LoginForm onClickSignIn={handleSignIn}/>
        </KeyboardAvoidingView>
      </View>
    </View>
    </ScrollView>
  )
}


