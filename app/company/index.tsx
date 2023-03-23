import { Link, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  const router = useRouter();

  const description = () => {
    router.push({
      pathname: "/description",
    });
  };

  const home = () => {
    router.push({
      pathname: "/",
    });
  };

  return (
    <View style={styles.container}>
      <Text>
        Empresa
      </Text>

      <Button onPress={description} title="Descrição" />
      <Button onPress={home} title="Home" />
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