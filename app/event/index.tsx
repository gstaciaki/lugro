import { Link, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles'

export default function Index() {
  const onClickSign = () => {
    console.log('Eventos')
  }
  
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.commentContainer}>

          <View style={styles.commentBlockOp1}>
            <View style={styles.imageContainer} >
              <Image style={styles.image} source={require("../../assets/restaurant.jpg")}></Image>
            </View>
            <View>
              <Text style={styles.commentText1}>Evento teste bla bla bla</Text>
            </View>
          </View>

          <View style={styles.commentBlockOp2}>
            <View style={styles.imageContainer} >
              <Image style={styles.image} source={require("../../assets/restaurant.jpg")}></Image>
            </View>
            <Text style={styles.commentText1}>Evento teste bla bla bla</Text>
          </View>

          <View style={styles.commentBlockOp3}>
            <View style={styles.imageContainer} >
              <Image style={styles.image} source={require("../../assets/restaurant.jpg")}></Image>
            </View>
            <Text style={styles.commentText2}>Evento teste bla bla bla</Text>
          </View>

          <View style={styles.commentBlockOp4}>
            <View style={styles.imageContainer} >
              <Image style={styles.image} source={require("../../assets/restaurant.jpg")}></Image>
            </View>
            <Text style={styles.commentText2}>Evento teste bla bla bla</Text>
          </View>

         
        </View>
      </View>
    </ScrollView>
  );
}

