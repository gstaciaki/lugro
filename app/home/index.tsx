import { useRouter } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native'
import { Polygon, Svg } from "react-native-svg";
import styles from './styles';

export default function Index() {
  const router = useRouter();

  const register = () => {
    router.push({
      pathname: "/register",
    });
  };

  const event = () => {
    router.push({
      pathname: "/event"
    })
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
        <Image source={require("../../assets/LugRo_logo.png")}></Image>
      </View>

      <View style={styles.buttonContainer}>

        <TouchableOpacity style={styles.loginButton} onPress={event}>
          <Text style={styles.buttonText}>Eventos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerButton} onPress={register}>
          <Text style={styles.buttonText}>Cadastrar Eventos</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
