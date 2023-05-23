
import { Link, useRouter } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, View, StyleSheet, Image, TextInput, Text, KeyboardAvoidingView, Platform } from 'react-native'
import { Polygon, Svg } from "react-native-svg";
import styles from "./styles";
import { useTheme } from "../../context/themeContext";
import ThemeSelector from "../../components/ThemeSelector";


export default function Index() {
  const router = useRouter();
  const { theme } = useTheme();
  const bgColor = theme == 'dark' ? '#000000' : '#EEEFFD';
  const bgSvgColor = theme == 'dark' ? '#BB86FC' : '#8870E6';
  const bgClientBtn = theme == 'dark' ? '#03DAC6' : '#99D14C';
  const bgCompanyBtn = theme == 'dark' ? '#CF6679' : '#F9ACB3';

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
    <View style={[styles.container, {backgroundColor: bgColor}]}>

    <Svg height="100%" width="100%" viewBox="0 25 100 100" style={{ position: 'absolute' }}>
      <Polygon
        points="0,0 100,0 100,55 75,75 0,60"
        fill={bgSvgColor}
      />
    </Svg>

    <View style={styles.logoContainer}>
      <Image source={require("../../assets/LugRo_logo.png")}></Image>
    </View>

    <View style={styles.buttonContainer}>
      <TouchableOpacity style={[styles.disabledbutton, {backgroundColor: bgClientBtn}]} onPress={userSignIn} disabled={true}>
            <Text style={styles.textButton}>Clientes</Text>
          </TouchableOpacity>
        <TouchableOpacity style={[styles.companyButton, {backgroundColor: bgCompanyBtn}]} onPress={companySignIn}>
            <Text style={styles.textButton}>Empresarial</Text>
        </TouchableOpacity>
    </View>
    <ThemeSelector>
      </ThemeSelector>
    <StatusBar style="auto" />
    </View>
    )
  }