import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { useTheme } from "../context/themeContext";
import { Ionicons } from "@expo/vector-icons";
import useCollection from "../hook/useCollection";
import { EventProps } from "../types/Event";
import { CommentProps } from "../types/Comment";

export default function ConfirmDelete(data: any) {
  const router = useRouter();
  const { theme } = useTheme();
  const bgRegisterBtn = theme == 'dark' ? '#03DAC6' : '#99D14C';  

  const { data: eventData, loading: eventLoading, remove: eventRemove, refreshData: eventRefresh} = useCollection<EventProps>(`events`);
  const { data: commentsData, loading: comentLoading, remove: commentRemove, refreshData: commentRefresh} = useCollection<CommentProps>(`events/${data.eventId}/comments`);

  const handleAlert = (data: any) => {
    Alert.alert("Confirmar", "Tem certeza que deseja deletar?", [
      {
        text: "Cancelar",
      },
      {
        text: "Sim",
        onPress: async () => {
          if(data.type == 'comentário'){
            await commentRemove(data.commentId!);
            await commentRefresh();
          }
          if(data.type == 'evento'){
            await eventRemove(data.eventId!);
            await eventRefresh();
          }
        },
      },
    ]);
  };

  return (
    <TouchableOpacity onPress={() => handleAlert(data)} style={[styles.button, { backgroundColor: '#ed7781' }]}>
    <Ionicons name="trash" size={24} color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  signInbutton: {
    display: 'flex',
    backgroundColor: '#99D14C',
    borderRadius: 15,
    width: '90%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 30,
    shadowColor: '#171717',
    shadowOffset: {width: -4, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  textButton: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: {width: 4, height: 4},
    textShadowRadius: 10
  },
  button: {
    borderRadius: 5,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 40,
  },      
});