import { useRouter } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native'
import { Circle, Polygon, Svg } from "react-native-svg";
import styles from './styles';
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export default function Index() {
  const router = useRouter();
  const authContext = useContext(AuthContext);

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
      <Image source={require("../../assets/LugRo_logo.png")} />
    </View>

    <View >
      <Svg width={400} height={300} viewBox="0 0 100 100">
        <Circle cx="5" cy="50" r="18" fill="#C6C9FF" />
        <View>
          <Image style={[styles.img, {top: 115, left: 30, width: 70, height: 70}]} source={require("./musica.png")} />
        </View>
        <Circle cx="50" cy="50" r="18" fill="#C6C9FF" />
        <View>
          <Image style={[styles.img, {top: 115, left: 165, width: 70, height: 70}]} source={require("./luta.png")} />
        </View>
        <Circle cx="95" cy="50" r="18" fill="#C6C9FF" />
        <View>
          <Image style={[styles.img, {top: 125, left: 298, width: 75, height: 50}]} source={require("./comida.png")} />
        </View>
      </Svg>
    </View>

    <View>
      <Text>Action Like {authContext.token}</Text>
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
