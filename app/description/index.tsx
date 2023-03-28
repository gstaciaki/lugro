import { Link, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles'

export default function Index() {

  const onClickSign = () => {
    console.log('Eu quero')
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>

        <View style={styles.imageContainer} >
          <Image style={styles.image} source={require("../../assets/restaurant.jpg")}></Image>
        </View>

        <Text style={styles.companieName}>Nome da Empresa</Text>

        <View style={styles.descriptionContainer}>

          <ScrollView style={styles.textContainer}>
            <Text style={styles.descriptionText}>Descrição de evento, cardápio (se restaurante), horários, local, valores.
              aaa
              aaa
              aaa
              aaaa
              vfvfd
              cfbgfdbfdbfdbd jhvfycxvdsghcvdsgcvgdsvgcsdghcvgdshcgh
              vbfdsbvfdsvfdsvfdsv
              vfdsvfdvsfdvfds
              vo surta
              bfdvfdsvfdvfdsv
            </Text>
          </ScrollView>

          <TouchableOpacity style={styles.buttonContainer} onPress={onClickSign}>
            <Text style={styles.buttonText}>Eu quero</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ratingStarsContainer}>
          <View style={styles.ratingStarsContent}>
            <Image source={require('../../assets/stars.png')} style={styles.starImg}></Image>
            <Text style={styles.ratingText}>(3) Avaliações</Text>
          </View>
        </View>

        <View style={styles.commentContainer}>

          <View style={styles.commentBlockOp1}>
            <Text style={styles.commentText1}>Comentários de usuários, suas avaliações e opção para curti o comentário que eu não vo implementa agora não</Text>
          </View>
          <View style={styles.commentBlockOp2}>
            <Text style={styles.commentText1}>Comentários de usuários, suas avaliações e opção para curti o comentário que eu não vo implementa agora não</Text>
          </View>
          <View style={styles.commentBlockOp3}>
            <Text style={styles.commentText2}>Comentários de usuários, suas avaliações e opção para curti o comentário que eu não vo implementa agora não</Text>
          </View>
          <View style={styles.commentBlockOp4}>
            <Text style={styles.commentText2}>Comentários de usuários, suas avaliações e opção para curti o comentário que eu não vo implementa agora não</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

