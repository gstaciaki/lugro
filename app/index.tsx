import { useRouter } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { View, Image, TouchableOpacity, Text } from 'react-native'
import { Polygon, Svg } from "react-native-svg";
import styles from './styles';
import useAuth from '../hook/useAuth';
import firebaseConfig from "../config/firebaseConfig";
import useFirebase from "../hook/useFirebase";
import ThemeProvider from "../context/themeContext";
import ThemeSelector from "../components/ThemeSelector";

export default function Index() {
  const router = useRouter();
  const fireabaseApp = useFirebase(firebaseConfig);
  const { loading, user, login, logout } = useAuth();

  const register = () => {
    router.push({
      pathname: "/register",
    });
  };

  const loginAction = () => {
    if(user){
      router.push({
        pathname: "/home"
      })
    } else {
      router.push({
        pathname: "/login"
      })
    }
  }

  return (

    <View style={styles.container}>

      <Svg height="100%" width="100%" viewBox="0 25 100 100" style={{ position: 'absolute' }}>
        <Polygon
          points="0,0 100,0 100,55 75,75 0,60"
          fill="#8870E6"
        />
      </Svg>

      <View style={styles.logoContainer}>
        <Image source={require("../assets/LugRo_logo.png")}></Image>
      </View>

      <View style={styles.buttonContainer}>

        <TouchableOpacity style={styles.loginButton} onPress={loginAction}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={styles.registerButton} onPress={register}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
