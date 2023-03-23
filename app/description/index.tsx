import { Link, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  const router = useRouter();

  const empresa = () => {
    router.push({
      pathname: "/company",
    });
  };

  return (
    <View style={styles.container}>
      <Text>
        Decrição da Empresa
      </Text>

      <Button onPress={empresa} title="Voltar" />
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