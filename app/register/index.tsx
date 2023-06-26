
import { Link, useRouter } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, View, StyleSheet, Image, TextInput, Text, KeyboardAvoidingView, Platform } from 'react-native'
import { Polygon, Svg } from "react-native-svg";
import styles from "./styles";
import defaultStyles from "../styles";
import { getThemeStyles, useTheme } from "../../context/themeContext";
import ThemeSelector from "../../components/ThemeSelector";


export default function Index() {
  const router = useRouter();
  const { theme } = useTheme();
  const { bgColor, bgSvgColor, bgClientBtn, bgCompanyBtn } = getThemeStyles(theme);

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
    <View style={[defaultStyles.container, { backgroundColor: bgColor }]}>

      <Svg height="100%" width="100%" viewBox="0 25 100 100" style={{ position: 'absolute' }}>
        <Polygon
          points="0,0 100,0 100,55 75,75 0,60"
          fill={bgSvgColor}
        />
      </Svg>

      <View style={[defaultStyles.logoContainer, {height: 250}]}>
        <Image source={require("../../assets/LugRo_logo.png")}></Image>
      </View>

      <View style={defaultStyles.buttonContainer}>
        <TouchableOpacity style={[defaultStyles.greenButton, { backgroundColor: bgClientBtn, opacity: 0.5 }]} onPress={userSignIn} disabled={true}>
          <Text style={styles.textButton}>Clientes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[defaultStyles.redButton, { backgroundColor: bgCompanyBtn }]} onPress={companySignIn}>
          <Text style={styles.textButton}>Empresarial</Text>
        </TouchableOpacity>
      </View>
      <ThemeSelector>
      </ThemeSelector>
      <StatusBar style="auto" />
    </View>
  )
}