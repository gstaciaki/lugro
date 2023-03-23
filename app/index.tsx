import { Link, useRouter } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button  } from 'react-native';

export default function Index() {
  const router = useRouter();

  const register = () => {
    router.push({
      pathname: "/register",
    });
  };

  return (
    <View style={styles.container}>
      <Text>O Jogo</Text>
      <Link href="/login">Login</Link>
      <Button onPress={register} title="Cadastrar" />
      <StatusBar style="auto" />
      <Link href="/company">Empresas</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
