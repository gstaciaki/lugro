import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Event } from "..";
import { Ionicons } from "@expo/vector-icons";
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

  // Lógica para editar o evento
  const onEdit = async () => {
    const updatedEvent = { ...event };
    delete updatedEvent.id;
    await update(event.id, updatedEvent);
    console.log("Editar evento:", event.id);
    setReload(true); // Atualiza o estado para recarregar os dados
  };

  // Lógica para excluir o evento
  const onDelete = async () => {
    try {
      await remove(event.id);
      console.log("Excluir evento:", event.id);
      setReload(true); // Atualiza o estado para recarregar os dados
    } catch (error) {
      console.error("Erro ao excluir evento:", error);
    }
  };

  useEffect(() => {
    if (reload) {
      refreshData(); // Recarrega os dados ao alterar o estado 'reload'
      setReload(false); // Redefine o estado para evitar um ciclo infinito
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

        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={onEdit} style={[styles.button, { backgroundColor: btnColors[colorIndex] }]}>
            <Ionicons name="pencil" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity onPress={onDelete} style={[styles.button, { backgroundColor: btnColors[colorIndex] }]}>
            <Ionicons name="trash" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
