import { Link, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
  
  
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.commentContainer}>

        {fakeEvents.map((event, index) => 
            <ComponentEvent key={index} event={event}/>
          )}
          
        </View>
      </View>
    </ScrollView>
  );
}

