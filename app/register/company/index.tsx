import { KeyboardAvoidingView, ScrollView, Text, View } from 'react-native'
import { useRouter } from "expo-router";
import styles from "./styles";
import RegisterForm from '../../../components/registerForm';
import { getThemeStyles, useTheme } from '../../../context/themeContext';

export default function Index() {
  const { theme } = useTheme();

  const { bgColor, titleColor } = getThemeStyles(theme);
  const router = useRouter()
  const handleRegister = async (
    name: string,
    cnpj: string,
    address: string,
    number: string,
    cep: string,
    district: string,
    email: string
  ) => {
  };

  const handleReturn = (
  ) => {
    router.push({
      pathname: "./",
    });
  };

  return (
    <ScrollView style={{backgroundColor: bgColor}}>
    <View style={[styles.body, {backgroundColor: bgColor}]}>
      <KeyboardAvoidingView behavior={'padding'}>
      <Text style={[styles.title, {backgroundColor: bgColor, color: titleColor}]}>Cadastrar</Text>
        <RegisterForm onReturn={handleReturn}/>
      </KeyboardAvoidingView>
    </View>
    </ScrollView>
  )
}
