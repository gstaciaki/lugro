import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";

  
  interface registerFormProps {
    onSubmit: (name: string, cnpj:string, address:string, number:string, 
              cep:string, district:string, email:string, password: string ) => void;
    onReturn: () => void;
  }
  
  export default function registerForm({ onSubmit, onReturn }: registerFormProps) {
    const [name, setName] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");
    const [cep, setCep] = useState("");
    const [district, setDistrict] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    return (
      <View style={styles.container}>
        <View style={styles.content}>
        <TextInput style={styles.input} placeholder='Nome' value={name} onChangeText={setName} />
        <TextInput style={styles.input} placeholder='Cnpj' keyboardType = 'numeric' value={cnpj} onChangeText={setCnpj} />
        <TextInput style={styles.input} placeholder='Endereço' value={address} onChangeText={setAddress} />
        <View style={{flexDirection:"row"}}>
          <View style={{flex:1}}>
              <TextInput style={styles.inputInside} placeholder='Número' keyboardType = 'numeric' value={number} onChangeText={setNumber} />
          </View>
          <View style={{flex:3}}>
              <TextInput style={styles.inputInside} placeholder='CEP' keyboardType = 'numeric' value={cep} onChangeText={setCep}/>
          </View>
        </View>
        <TextInput style={styles.input} placeholder='Bairro' value={district} onChangeText={setDistrict} />
        <TextInput style={styles.input} placeholder='E-mail' value={email} onChangeText={setEmail} />
        <TextInput style={styles.input} placeholder='Senha' value={password} onChangeText={setPassword} />

        <View style={{flexDirection:"row", marginLeft: "5%"}}>
          <View style={{flex:1}}>
            <TouchableOpacity style={styles.returnButton} onPress={() => onReturn()}>
              <Text style={styles.textButton}>Voltar</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex:1}}>
            <TouchableOpacity style={styles.signInbutton} onPress={() => onSubmit(name, cnpj, address, number, cep, district, email, password)}>
              <Text style={styles.textButton}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEFFD',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      },
      logo: {
        flex: 1
      },
      content: {
          flex: 1,
          backgroundColor: '#99D14C',
          borderRadius: 27,
          width: '85%',
          padding: 20,
          alignItems: 'center',
          justifyContent: 'center',
      },
      title: {
        color: '#252C53',
        backgroundColor: '#FFF',
        paddingTop: 20,
        fontSize: 35,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: {width: 4, height: 4},
        textShadowRadius: 10,
        textAlign: 'left',
        alignItems: 'flex-start',
        paddingLeft: '10%',
      },
      input: {
        padding: 5,
        margin: 10,
        height: 55,
        borderWidth: 1,
        borderColor: 'white',
        width: 250,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
      },
      inputInside: {
        padding: 5,
        margin: 10,
        height: 55,
        borderWidth: 1,
        borderColor: 'white',
        width: '92%',
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
      },
    returnButton: {
      display: 'flex',
      backgroundColor: '#F9D415',
      borderRadius: 15,
      width: '90%',
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15,
      marginBottom: 30,
      shadowColor: '#171717',
      shadowOffset: {width: -4, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    signInbutton: {
      display: 'flex',
      backgroundColor: '#2E61AD',
      borderRadius: 15,
      width: '90%',
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15,
      marginBottom: 30,
      shadowColor: '#171717',
      shadowOffset: {width: -4, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    textButton: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: 'bold',
      textShadowColor: 'rgba(0, 0, 0, 0.1)',
      textShadowOffset: {width: 4, height: 4},
      textShadowRadius: 10
    }
  });