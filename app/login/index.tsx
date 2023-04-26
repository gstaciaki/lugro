import { Link, useRouter } from 'expo-router';
import React from 'react'
import { TouchableOpacity, View, Image, TextInput, Text, KeyboardAvoidingView, Platform, Button } from 'react-native'
import { Polygon, Svg } from 'react-native-svg';
import styles from './styles';

export default function Index() {

  const router = useRouter()
  const onClickSignIn = () => {
    router.push({
      pathname: "/home",
    });
  };

  return (
    <View style={styles.header}>
      <Svg height="100%" width="100%" viewBox="0 25 100 100" style={{ position: 'absolute' }}>
        <Polygon
          points="0,0 100,0 100,55 75,75 0,60"
          fill="#8870E6"
        />
      </Svg>

      <View style={styles.logoContainer}>
        <Image source={require("../../assets/LugRo_logo.png")}></Image>
      </View>
    
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>

        <View style={styles.content}>
          <TextInput style={styles.input} placeholder='E-mail' />

          <TextInput style={styles.input} placeholder='Senha' />

          <TouchableOpacity style={styles.button}>
            <Button title='Entrar' color="white"  onPress={onClickSignIn}></Button>
          </TouchableOpacity>

          <Link href="/register">Cadastrar-se</Link>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}


