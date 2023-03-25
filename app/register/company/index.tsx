import { Link, useRouter } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, View, StyleSheet, Image, TextInput, Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import styles from "./styles";

export default function Index() {

  const router = useRouter()
  const returnPage = () => {
    router.push({
      pathname: "./",
    });
  };

  const signIn = () => {
    router.push({
      pathname: "/",
    });
  };


  return (
    <ScrollView>
    <KeyboardAvoidingView behavior={'padding'}
      style={styles.container}>
        
      <View style={styles.content}>
        <TextInput style={styles.input} placeholder='Nome' />
        <TextInput style={styles.input} placeholder='Cnpj' />
        <TextInput style={styles.input} placeholder='Endereço' />
        <View style={{flexDirection:"row"}}>
          <View style={{flex:1}}>
              <TextInput style={styles.input} placeholder='Número' keyboardType = 'numeric' />
          </View>
          <View style={{flex:3}}>
              <TextInput style={styles.input} placeholder='CEP' keyboardType = 'numeric'/>
          </View>
        </View>
        <TextInput style={styles.input} placeholder='Bairro' />
        <TextInput style={styles.input} placeholder='E-mail' />
        <TextInput style={styles.input} placeholder='Senha' />
        <TextInput style={styles.input} placeholder='Confirmar Senha' />

        <View style={{flexDirection:"row", marginLeft: "5%"}}>
          <View style={{flex:1}}>
            <TouchableOpacity style={styles.returnButton} onPress={returnPage}>
              <Text style={styles.textButton}>Voltar</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex:1}}>
            <TouchableOpacity style={styles.signInbutton} onPress={signIn}>
              <Text style={styles.textButton}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
    </ScrollView>
  )
}
