import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Event } from "../../../hook/useDocument";
import styles from "./styles";
import useCollection from "../../../hook/useCollection";
import React, { useEffect, useState } from 'react';

interface ComponentEventProps {
  event: Event;
}

// Cores disponíveis
const colors = ['#F9ACB3', '#C6C9FF', '#5b66A3', '#99D14C'];
const btnColors = ['#ed7781', '#898cc7', '#283685', '#3e610e'];

// Função para retornar uma cor aleatória
let colorIndex = 0;
const getNextColor = () => {
  const color = colors[colorIndex];
  const btnColor = btnColors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
  return { color, btnColor };
};

export default function ComponentEvent({ event }: ComponentEventProps) {
  const backgroundColor = getNextColor();

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
    <View style={[styles.container, { backgroundColor: colors[colorIndex] }]}>
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
