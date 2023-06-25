import { Alert, KeyboardAvoidingView, ScrollView, Text, View } from 'react-native'
import { useRouter } from "expo-router";
import styles from "./styles";
import RegisterForm from '../../../components/registerForm';
import { getThemeStyles, useTheme } from '../../../context/themeContext';
import { CompanyProps } from '../../../types/Company';
import useCollection from '../../../hook/useCollection';

export default function Index() {
  const { theme } = useTheme();

  const { bgColor, titleColor } = getThemeStyles(theme);
  const { data, loading, refreshData, create} = useCollection<CompanyProps>('companies');

  const router = useRouter()

  const handleSubmit = async (
    name: string,
    cnpj: string,
    address: string,
    number: string,
    cep: string,
    district: string,
    email: string
  ) => {
    try {
      const companyData = 
        {
          name: name,
          cnpj: cnpj,
          address: address,
          number: number,
          cep: cep,
          district: district,
          email: email
        };
      
      const newCompany: CompanyProps = companyData;
      await create(companyData);
      await refreshData();
    } catch (error: any) {
      Alert.alert("Falha ao criar Empresa", error.toString());
    }
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
        <RegisterForm onSubmit={handleSubmit}/>
      </KeyboardAvoidingView>
    </View>
    </ScrollView>
  )
}
