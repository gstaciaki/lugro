
import { Link, useRouter } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, View, StyleSheet, Image, TextInput, Text, KeyboardAvoidingView, Platform } from 'react-native'
import { Polygon, Svg } from "react-native-svg";
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
    <View style={styles.container}>

    <Svg height="100%" width="100%" viewBox="0 25 100 100" style={{ position: 'absolute' }}>
      <Polygon
        points="0,0 100,0 100,55 75,75 0,60"
        fill="#8870E6"
      />
    </Svg>

    <View style={styles.logoContainer}>
      <Image source={require("../../assets/LugRo_logo.png")}></Image>
    </View>

    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.disabledbutton} onPress={userSignIn} disabled={true}>
            <Text style={styles.textButton}>Clientes</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.companyButton} onPress={companySignIn}>
            <Text style={styles.textButton}>Empresarial</Text>
        </TouchableOpacity>
    </View>

    <StatusBar style="auto" />
    </View>
    )
  }