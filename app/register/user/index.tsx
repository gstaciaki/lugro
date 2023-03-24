
import { Link, useRouter } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button  } from 'react-native';

export default function Index() {

  const router = useRouter()
  const home = () => {
    router.push({
      pathname: "/",
    })
  }

  return (
    <View style={styles.container}>
      <Text>Usuario</Text>
      <Button onPress={home} title='voltar'></Button>
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
