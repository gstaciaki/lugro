import { useLocalSearchParams, useRouter } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { View, Image, TouchableOpacity, Text, ScrollView, Alert } from 'react-native'
import { Circle, Polygon, Svg } from "react-native-svg";
import styles from './styles';
import defaultStyles from '../styles';
import { useModal } from "../../components/ModalProvider";
import EventForm from "../../components/event/EventForm";
import useCollection from "../../hook/useCollection";
import { getThemeStyles, useTheme } from "../../context/themeContext";
import { EventProps } from "../../types/Event";
import ThemeSelector from "../../components/ThemeSelector";
import useAuth from "../../hook/useAuth";
import { Ionicons } from "@expo/vector-icons";

import { CompanyProps } from "../../types/Company";
import React, { useEffect, useState } from 'react';

export default function Index() {
  const router = useRouter();
  const modal = useModal();
  const { create } = useCollection<EventProps>("events");
  const { loading , remove, update, filter, all} = useCollection<CompanyProps>('companies', false);
  const {email} = useLocalSearchParams()
  const { theme } = useTheme();
  const { bgColor, bgSvgColor, bgCircleColor, bgLoginBtn, bgRegisterBtn } = getThemeStyles(theme);
  const { user, logout } = useAuth();
  const [companies, setData] = useState<CompanyProps[]>([])
  const [name, setName] = useState('');

  const register = () => {
    modal.show(
      <EventForm onSubmit={handleSubmit} />
    )
  };

  const handleSubmit = async (
    title: string,
    description: string,
    local: string,
    date: string,
    category: string,
    companyEmail: string
  ) => {
    try {
      const eventData = 
        {
          title: title,
          description: description,
          local: local,
          date: date,
          category: category,
          companyEmail: companyEmail
        };
      
      const newEvent: EventProps = eventData;
      await create(newEvent);
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

  const handleFilter = (
    event: string
  ) => {
    router.push({
      pathname: "/event",
      params: {
        category: event,
      }
    })
  }

  const refreshData = () =>{
    if(email){
      filter("email", email as string || "").then(data => {
        setData(data);
        
        if(name == ""){
          setName(data[0].name);
        }
      })
    }
    else{
      all().then(data => setData(data))
    }
  }

  useEffect(() => {
    refreshData()
  }, [])


  const Logout = () => {
    logout();
    router.push({
      pathname: "/"
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
  
        <View style={styles.headerContainer}>
          <Text style={styles.emailText}>Bem vindo(a) {name}</Text>
          <TouchableOpacity onPress={Logout} style={styles.logoutText}>
            <Ionicons name="log-out-outline" size={20} color="#ccc" />
            <Text style={{ color: '#ccc', marginLeft: 5 }}>Logout</Text>
          </TouchableOpacity>
        </View>
        
        <View style={defaultStyles.logoContainer}>
          <Image source={require("../../assets/LugRo_logo.png")} />
        </View>
  
        <ScrollView horizontal={true}>
        <View style={{flexDirection:"row"}}>
            <View style={{flex:1, width:"50%"}}>
              <TouchableOpacity onPress={() => handleFilter('Show')}>
              <Svg width={150} height={250} viewBox="0 0 60 50">
                <Circle cx="25" cy="25" r="22" fill={bgCircleColor} />
                <View>
                  <Image style={[styles.img, {top: 90, left: 30, width: 70, height: 70}]} source={require("../../assets/musica.png")} />
                </View>
              </Svg>
              </TouchableOpacity>
            </View>
            <View style={{flex:1}}>
              <TouchableOpacity onPress={() => handleFilter('Lutas')}  >
              <Svg width={150} height={250} viewBox="0 0 60 50">
                <Circle cx="25" cy="25" r="22" fill={bgCircleColor} />
                <View>
                  <Image style={[styles.img, {top: 90, left: 30, width: 70, height: 70}]} source={require("../../assets/luta.png")} />
                </View>
              </Svg>
              </TouchableOpacity>
            </View>
            <View style={{flex:1}}>
              <TouchableOpacity onPress={() => handleFilter('Gastronômico')}>
              <Svg width={150} height={250} viewBox="0 0 60 50">
                <Circle cx="25" cy="25" r="22" fill={bgCircleColor} />
                <View>
                  <Image style={[styles.img, {top: 100, left: 25, width: 75, height: 50}]} source={require("../../assets/comida.png")} />
                </View>
              </Svg>
              </TouchableOpacity>
            </View>
            <View style={{flex:1}}>
              <TouchableOpacity onPress={() => handleFilter('Cervejada')}>
              <Svg width={150} height={250} viewBox="0 0 60 50">
                <Circle cx="25" cy="25" r="22" fill={bgCircleColor} />
                <View>
                  <Image style={[styles.img, {top: 85, left: 25, width: 75, height: 75}]} source={require("../../assets/cervejada.png")} />
                </View>
              </Svg>
              </TouchableOpacity>
            </View>
            <View style={{flex:1}}>
              <TouchableOpacity onPress={() => handleFilter('Encontro de carros')}>
              <Svg width={150} height={250} viewBox="0 0 60 50">
                <Circle cx="25" cy="25" r="22" fill={bgCircleColor} />
                <View>
                  <Image style={[styles.img, {top: 85, left: 5, width: 120, height: 75}]} source={require("../../assets/carro.png")} />
                </View>
              </Svg>
              </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
  
        <View style={defaultStyles.buttonContainer}>
          <TouchableOpacity style={[defaultStyles.greenButton, {backgroundColor: bgLoginBtn}]} onPress={event}>
            <Text style={defaultStyles.buttonText}>Eventos</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={[defaultStyles.redButton, {backgroundColor: bgRegisterBtn}]} onPress={register}>
            <Text style={defaultStyles.buttonText}>Criar Eventos</Text>
          </TouchableOpacity>
        </View>
        <ThemeSelector>
        </ThemeSelector>
        <StatusBar style="auto" />
      </View>
  
    </ScrollView>
  );}