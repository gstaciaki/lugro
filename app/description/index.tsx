import { Link, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles'
import _ComponentComment from './_ComponentComment';
import useCollection from '../../hook/useCollection';
import { Comment, Event } from '../../hook/useCollection';

export default function Index() {

  const { data: commentsData, loading: commentsLoading } = useCollection('comments');
  const { data: eventData, loading: eventLoading } = useCollection('events');

  if (commentsLoading || eventLoading) {
    return <View style={styles.container}><Text>Loading...</Text></View>;
  }
  
  if (commentsData.length === 0) {
    return <View style={styles.container}><Text>Nenhum comentário foi encontrado.</Text></View>;
  }

  const event = eventData[0];

  const renderItem = ({ item }: { item: Comment }) => (
    <View style={styles.commentContainer}>
      <_ComponentComment comment={item} />
    </View>
  );

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>

        <View style={styles.imageContainer} >
          <Image style={styles.image} source={require("../../assets/restaurant.jpg")}></Image>
        </View>

        <Text style={styles.companieName}>{event.title}</Text>

        <View style={styles.descriptionContainer}>
          <ScrollView style={styles.textContainer}>
            <Text style={styles.descriptionText}>{event.description}</Text>
          </ScrollView>
        </View>

        <View style={styles.ratingStarsContainer}>
          <View style={styles.ratingStarsContent}>
            <Image source={require('../../assets/stars.png')} style={styles.starImg}></Image>
            <Text style={styles.ratingText}>(3) Avaliações</Text>
          </View>
        </View>

        <FlatList
          data={commentsData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.container}
        />

      </View>
    </ScrollView>
  );
}
