import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
// import { Event } from "../../../hook/useDocument";
import { EventProps } from "../../../types/Event";
import styles from "./styles";
import useCollection from "../../../hook/useCollection";
import React, { useEffect, useState } from 'react';

interface ComponentEventProps {
  event: EventProps;
  color: number
}

// Cores disponíveis
const colors = ['#F9ACB3', '#C6C9FF', '#5b66A3', '#99D14C'];
const btnColors = ['#ed7781', '#898cc7', '#283685', '#3e610e'];

// Função para retornar uma cor aleatória
// let colorIndex = 0;
const getNextColor = (colorIndex: number) => {
  const color = colors[colorIndex % colors.length];
  const btnColor = btnColors[colorIndex % colors.length];
  //colorIndex = (colorIndex + 1) % colors.length;
  return { color, btnColor };
};

export default function ComponentEvent({ event, color }: ComponentEventProps) {
  const backgroundColor = getNextColor(color);
  

  const router = useRouter();
  const { update, remove, data, refreshData } = useCollection<Event>("events");
  const [reload, setReload] = useState(false);

  const onPress = () => {
    router.push(`/description?eventId=${event.id}`);
  };

  useEffect(() => {
    if (reload) {
      refreshData(); 
      setReload(false);
    }
  }, [reload]);

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor.color }]}>
      <Image style={styles.image} source={event.imageSource} />

      <View>
        <Text style={styles.title}>{event.title}</Text>

        <TouchableOpacity onPress={onPress}>
          <Text style={styles.buttonText}>Ver mais..</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}