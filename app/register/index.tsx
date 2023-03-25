
import { Link, useRouter } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, View, StyleSheet, Image, TextInput, Text, KeyboardAvoidingView, Platform } from 'react-native'
import styles from "./styles";

export default function Index() {
  const router = useRouter();

  const userSignIn = () => {
    router.push({
      pathname: "/register/user",
    });
  };

  const companySignIn = () => {
    router.push({
      pathname: "/register/company",
    });
  };

  return (
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View style={styles.logo}>
          <Image source={require('./../../assets/LugRo_logo.png')}></Image>
        </View>
        <TouchableOpacity style={styles.disabledbutton} onPress={userSignIn} disabled={true}>
            <Text style={styles.textButton}>Clientes</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.companyButton} onPress={companySignIn}>
            <Text style={styles.textButton}>Empresarial</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }