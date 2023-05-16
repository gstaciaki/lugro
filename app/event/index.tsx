import { Link, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import styles from './styles'
import ComponentEvent from './_ComponentEvent';

export type EventProps = {
  imageSource: any,
  title: string,
  color: string
}

const fakeEvents: EventProps[] = [
  {
    imageSource: require("../../assets/restaurant.jpg"),
    title: "Evento teste bla bla bla",
    color: '#F9ACB3',
  },
  {
    imageSource: require("../../assets/restaurant.jpg"),
    title: "Evento teste 2",
    color: '#C6C9FF'
  },
  {
    imageSource: require("../../assets/restaurant.jpg"),
    title: "Evento teste 3",
    color: '#252C53'
  },
  {
    imageSource: require("../../assets/restaurant.jpg"),
    title: "Evento teste 3",
    color: '#99D14C'
  }
]

export default function Index() {
  const renderItem = ({ item }: { item: EventProps }) => {
    return (
      <View style={styles.commentContainer}>
        <ComponentEvent event={item} />
      </View>
    );
  };

  return (
    <FlatList
      data={fakeEvents}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
}
