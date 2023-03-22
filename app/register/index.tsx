
import { Link, useRouter } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button  } from 'react-native';

export default function Index() {
  const router = useRouter();

  const company = () => {
    router.push({
      pathname: "/register/company",
    });
  };

  const user = () => {
    router.push({
      pathname: "/register/user",
    });
  };

  return (
    <View style={styles.container}>
      <Text>Cadastrar</Text>
      <Button onPress={user} title="Cliente" />
      <Button onPress={company} title="Empresa" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEFFD',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
