import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Confirm from "./Confirm";
import ThemeSelector from "./ThemeSelector";
import { getThemeStyles, useTheme } from "../context/themeContext";

  
  interface registerFormProps {
    onReturn: () => void;
  }
  
  export default function registerForm({ onReturn }: registerFormProps) {
    const [name, setName] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");
    const [cep, setCep] = useState("");
    const [district, setDistrict] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { theme, toggleTheme } = useTheme();
    const { bgColor, bgInputColor, bgReturnBtn } = getThemeStyles(theme);
  
    const handleCepChange = (text: string) => {
      setCep(text);

      if(text.length === 8) {
        fetch(`https://viacep.com.br/ws/${text}/json/`)
        .then(response => response.json())
        .then(data => {
          setAddress(data.logradouro)
          setDistrict(data.bairro)
        })
        .catch(error => [
          console.log(error)   
        ])
      }
    }

    return (
      <View style={[styles.container, {backgroundColor: bgColor}]}>
        <View style={styles.content}>
        <TextInput style={[styles.input, {backgroundColor: bgInputColor}]} placeholder='Nome' value={name} onChangeText={setName} />
        <TextInput style={[styles.input, {backgroundColor: bgInputColor}]} placeholder='Cnpj' keyboardType = 'numeric' value={cnpj} onChangeText={setCnpj} />
        <TextInput style={[styles.input, {backgroundColor: bgInputColor}]} placeholder='Endereço' value={address} onChangeText={setAddress} />
        <View style={{flexDirection:"row"}}>
          <View style={{flex:1}}>
              <TextInput style={[styles.inputInside, , {backgroundColor: bgInputColor}]} placeholder='Número' keyboardType = 'numeric' value={number} onChangeText={setNumber} />
          </View>
          <View style={{flex:3}}>
              <TextInput style={[styles.inputInside, {backgroundColor: bgInputColor}]} placeholder='CEP' keyboardType = 'numeric' value={cep} onChangeText={handleCepChange}/>
          </View>
        </View>
        <TextInput style={[styles.input, {backgroundColor: bgInputColor}]} placeholder='Bairro' value={district} onChangeText={setDistrict} />
        <TextInput style={[styles.input, {backgroundColor: bgInputColor}]} placeholder='E-mail' value={email} onChangeText={setEmail} />
        <TextInput style={[styles.input, {backgroundColor: bgInputColor}]} placeholder='Senha' value={password} onChangeText={setPassword} />

        <View style={{flexDirection:"row", marginLeft: "5%"}}>
          <View style={{flex:1}}>
            <TouchableOpacity style={[styles.returnButton, {backgroundColor:  bgReturnBtn}]} onPress={() => onReturn()}>
              <Text style={styles.textButton}>Voltar</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex:1}}>
          <Confirm name={name} cnpj={cnpj} address={address} number={number} cep={cep} district={district} email={email} password={password}/>
          </View>
        </View>
      </View>
      <ThemeSelector>
      </ThemeSelector>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEFFD',
        alignItems: 'center',
        justifyContent: 'center',
      },
      logo: {
        flex: 1
      },
      content: {
          flex: 1,
          //backgroundColor: '#99D14C',
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
        height: 60,
        borderWidth: 1,
        borderColor: 'white',
        width: '92%',
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
      },
      inputInside: {
        padding: 5,
        margin: 10,
        height: 60,
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
      marginTop: 30,
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