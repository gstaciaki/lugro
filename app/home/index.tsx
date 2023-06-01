import { useRouter } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { View, Image, TouchableOpacity, Text, ScrollView, Alert } from 'react-native'
import { Circle, Polygon, Svg } from "react-native-svg";
import styles from './styles';
import defaultStyles from '../styles';
import { useModal } from "../../components/ModalProvider";
import EventForm from "../../components/event/EventForm";
import useCollection from "../../hook/useCollection";
import  Confirm  from "../../components/Confirm";
import { getThemeStyles, useTheme } from "../../context/themeContext";
import { EventProps } from "../../types/Event";
import ThemeSelector from "../../components/ThemeSelector";

export default function Index() {
  const router = useRouter();
  const modal = useModal();
  const { create, refreshData } = useCollection<EventProps>("events");
  const { theme } = useTheme();
  const { bgColor, bgSvgColor, bgCircleColor, bgLoginBtn, bgRegisterBtn } = getThemeStyles(theme);

  const register = () => {
    modal.show(
      <EventForm onSubmit={handleSubmit}/>
    )
  };

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
      
      const newEvent: EventProps = eventData;
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

    <View style={[defaultStyles.container, {backgroundColor: bgColor}]}>
      <Svg height="100%" width="100%" viewBox="0 28 100 100" style={{ position: 'absolute' }}>
        <Polygon
          points="0,0 100,0 100,55 75,75 0,60"
          fill={bgSvgColor}
        />
      </Svg>

      <View style={defaultStyles.logoContainer}>
        <Image source={require("../../assets/LugRo_logo.png")} />
      </View>

      <View >
        <Svg width={400} height={300} viewBox="0 0 100 100">
          <Circle cx="5" cy="50" r="18" fill={bgCircleColor} />
          <View>
            <Image style={[styles.img, {top: 115, left: 30, width: 70, height: 70}]} source={require("./musica.png")} />
          </View>
          <Circle cx="50" cy="50" r="18" fill={bgCircleColor} />
          <View>
            <Image style={[styles.img, {top: 115, left: 165, width: 70, height: 70}]} source={require("./luta.png")} />
          </View>
          <Circle cx="95" cy="50" r="18" fill={bgCircleColor} />
          <View>
            <Image style={[styles.img, {top: 125, left: 298, width: 75, height: 50}]} source={require("./comida.png")} />
          </View>
        </Svg>
      </View>

      <View style={defaultStyles.buttonContainer}>
        <TouchableOpacity style={[defaultStyles.greenButton, {backgroundColor: bgLoginBtn}]} onPress={event}>
          <Text style={defaultStyles.buttonText}>Eventos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[defaultStyles.redButton, {backgroundColor: bgRegisterBtn}]} onPress={register}>
          <Text style={defaultStyles.buttonText}>Cadastrar Eventos</Text>
        </TouchableOpacity>
      </View>
      <ThemeSelector>
      </ThemeSelector>
      <StatusBar style="auto" />
    </View>

  </ScrollView>
);}
