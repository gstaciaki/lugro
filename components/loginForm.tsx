import { View, Text, StyleSheet, TextInput, TouchableOpacity, Switch } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";

  
  interface loginFormProps {
    onClickSignIn: (email: string, password: string, remember: boolean ) => void;
  }
  
  export default function loginForm({ onClickSignIn }: loginFormProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRememeber] = useState(true);
  
    const canSubmit = email.length === 0 || password.length === 0;

    return (
      <View style={styles.container}>
        <View style={styles.content}>
        
          <TextInput style={styles.input} placeholder='E-mail' value={email} onChangeText={setEmail} />

          <TextInput style={styles.input} placeholder='Senha' value={password} onChangeText={setPassword} />

          <View style={styles.switchContainer}>
            <Switch onValueChange={setRememeber} value={remember} />
            <Text>Remember-me</Text>
          </View>

          <TouchableOpacity disabled={canSubmit} style={styles.button}  onPress={() => onClickSignIn(email, password, remember)}>
            <Text style={styles.textButton}>Entrar</Text>
          </TouchableOpacity>

          <Link href="/register">Cadastrar-se</Link>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 20
    },
    content: {
        flex: 1,
        // backgroundColor: '#99D14C',
        borderRadius: 27,
        width: '85%',
        height: '55%',
        marginTop: 50,
        marginBottom: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
      padding: 5,
      margin: 10,
      height: 55,
      borderWidth: 1,
      borderColor: 'white',
      width: 200,
      backgroundColor: 'white',
      borderRadius: 10,
      justifyContent: 'center',
    },
    button: {
      display: 'flex',
      backgroundColor: '#8870E6',
      borderRadius: 15,
      width: '90%',
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15,
      marginBottom: 30,
    },
    textButton: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: 'bold'
    },
    switchContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
  });