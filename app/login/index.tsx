import { Link } from 'expo-router';
import React from 'react'
import { TouchableOpacity, View, StyleSheet, Image, TextInput, Text } from 'react-native'
import styles from './styles';

export default function Index() {

  const onClickSignIn = () => {
    console.log('Clicou no entrar');
  };

    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image source={require('./LugRo_logo.png')}></Image>
        </View>
        <View style={styles.content}>
          <TextInput style={styles.input} placeholder='E-mail'/>

          <TextInput style={styles.input} placeholder='Senha' />

          <TouchableOpacity style={styles.button} onPress={onClickSignIn}>
            <Text style={styles.textButton}>Entrar</Text>
          </TouchableOpacity>

          <Link href="/register">Cadastrar-se</Link>
        </View>
      </View>
    )
}


