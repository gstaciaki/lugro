import { Link, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import styles from './styles';
import ComponentEvent from './_ComponentEvent';
import useCollection from '../../hook/useCollection';
import { Event } from '../../hook/useCollection';

export default function Index() {
  const { data, loading } = useCollection('events');

  if (loading) {
    return <View style={styles.container}><Text>Loading...</Text></View>;
  }

  if (!data) {
    return <View style={styles.container}><Text>Nenhum evento foi encontrado.</Text></View>;
  }

  const renderItem = ({ item }: { item: Event }) => (
    <View style={styles.commentContainer}>
      <ComponentEvent event={item} />
    </View>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
}
