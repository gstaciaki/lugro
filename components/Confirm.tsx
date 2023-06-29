import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { useTheme } from "../context/themeContext";
import useAuth from "../hook/useAuth";
import useCollection from "../hook/useCollection";
import { CompanyProps } from "../types/Company";


export default function Confirm(data:any) {
  const router = useRouter();
  const { loading, user, create } = useAuth();
  const { theme } = useTheme();
  const bgRegisterBtn = theme == 'dark' ? '#03DAC6' : '#99D14C';  
  const {refreshData, create: createCompany} = useCollection<CompanyProps>('companies');

  const handleAlert = (data: any) => {
    Alert.alert("Confirmar", "Tem certeza que quer fazer esse cadastro? ", [
      { text: "Cancelar" },
      {
        text: "Sim",
        onPress: async () => {
          await create(data.email, data.password);

          const companyData = {
            name: data.name,
            cnpj: data.cnpj,
            address: data.address,
            number: data.number,
            cep: data.cep,
            district: data.district,
            email: data.email
          };
          const newCompany: CompanyProps = companyData;
          await createCompany(newCompany);
          await refreshData();
             
          console.log("Cadastrado de", data.name , "feito com sucesso");
          router.push({
            pathname: "/login",
          });
        },
      },
    ]);
  };

  return (
  <TouchableOpacity style={[styles.signInbutton, {backgroundColor: bgRegisterBtn}]} onPress={() => handleAlert(data)}>
    <Text style={styles.textButton}>Cadastrar</Text>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  signInbutton: {
    display: 'flex',
    backgroundColor: '#99D14C',
    borderRadius: 15,
    width: '90%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 30,
    shadowColor: '#171717',
    shadowOffset: {width: -4, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  textButton: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: {width: 4, height: 4},
    textShadowRadius: 10
  }
});