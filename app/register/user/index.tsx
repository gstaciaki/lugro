
import { Link, useRouter } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button  } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Usuario</Text>
      
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
