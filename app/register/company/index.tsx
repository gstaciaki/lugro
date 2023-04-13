import { KeyboardAvoidingView, ScrollView, Text, View } from 'react-native'
import { useRouter } from "expo-router";
import styles from "./styles";
import RegisterForm from '../../../components/registerForm';

export default function Index() {

  const router = useRouter()
  const handleRegister = (
    name: string,
    cnpj: string,
    address: string,
    number: string,
    cep: string,
    district: string,
    email: string,
    password: string,
  ) => {
    console.log("Cadastrado de", name , "feito com sucesso");
  };

  const handleReturn = (
  ) => {
    router.push({
      pathname: "./",
    });
  };

  return (
    <ScrollView>
    <View style={styles.body}>
    <Text style={styles.title}>Cadastrar</Text>
    <KeyboardAvoidingView behavior={'padding'}>
      <RegisterForm onReturn={handleReturn} onSubmit={handleRegister}/>
    </KeyboardAvoidingView>
    </View>
    </ScrollView>
  )
}
