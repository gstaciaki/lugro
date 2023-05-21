import { useRouter } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { View, Image, TouchableOpacity, Text, ScrollView, Alert } from 'react-native'
import { Circle, Polygon, Svg } from "react-native-svg";
import styles from './styles';
import { useModal } from "../../components/ModalProvider";
import EventForm from "../../components/EventForm";
import { useContext } from "react";
import useCollection from "../../hook/useCollection";


export default function Index() {
  const router = useRouter();
  const modal = useModal();
  const { create, refreshData } = useCollection<Event>("events");

  const register = () => {
    modal.show(
      <EventForm onSubmit={handleSubmit}/>
    )
  };

  interface Event {
    title: string;
    description: string;
    date: string;
    local: string;
    category: string;
  }

  const handleSubmit = async (
    title: string,
    description: string,
    local: string,
    date: string,
    category: string
  ) => {
    try {
      const eventData = 
        {
          title: title,
          description: description,
          local: local,
          date: date,
          category: category
        };
      
      const newEvent: Event = eventData;
      await create( newEvent );
      await refreshData();
      modal.hide();
    } catch (error: any) {
      Alert.alert("Falha ao criar evento", error.toString());
    }
  };

  const event = () => {
    router.push({
      pathname: "/event"
    })
  }

return (
  <ScrollView>

    <View style={styles.container}>
      <Svg height="100%" width="100%" viewBox="0 25 100 100" style={{ position: 'absolute' }}>
        <Polygon
          points="0,0 100,0 100,55 75,75 0,60"
          fill="#8870E6"
        />
      </Svg>

      <View style={styles.logoContainer}>
        <Image source={require("../../assets/LugRo_logo.png")} />
      </View>

      <View >
        <Svg width={400} height={300} viewBox="0 0 100 100">
          <Circle cx="5" cy="50" r="18" fill="#C6C9FF" />
          <View>
            <Image style={[styles.img, {top: 115, left: 30, width: 70, height: 70}]} source={require("./musica.png")} />
          </View>
          <Circle cx="50" cy="50" r="18" fill="#C6C9FF" />
          <View>
            <Image style={[styles.img, {top: 115, left: 165, width: 70, height: 70}]} source={require("./luta.png")} />
          </View>
          <Circle cx="95" cy="50" r="18" fill="#C6C9FF" />
          <View>
            <Image style={[styles.img, {top: 125, left: 298, width: 75, height: 50}]} source={require("./comida.png")} />
          </View>
        </Svg>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={event}>
          <Text style={styles.buttonText}>Eventos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerButton} onPress={register}>
          <Text style={styles.buttonText}>Cadastrar Eventos</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>

  </ScrollView>
);}
