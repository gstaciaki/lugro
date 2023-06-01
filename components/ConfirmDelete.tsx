import React from "react";
import { Alert, TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "../context/themeContext";
import { Ionicons } from "@expo/vector-icons";
import useCollection from "../hook/useCollection";
import { EventProps } from "../types/Event";
import { CommentProps } from "../types/Comment";

interface ConfirmDeleteProps {
  type: string;
  eventId?: string;
  commentId?: string;
  onRefresh: () => void;
}

export default function ConfirmDelete({ type, eventId, commentId, onRefresh }: ConfirmDeleteProps) {
  const { theme } = useTheme();
  const bgRegisterBtn = theme == 'dark' ? '#03DAC6' : '#99D14C';

  const { remove: removeEvent } = useCollection<EventProps>('events');
  const { remove: removeComment } = useCollection<CommentProps>(`events/${eventId}/comments`);

  const handleAlert = async () => {
    Alert.alert("Confirmar", "Tem certeza que deseja deletar?", [
      {
        text: "Cancelar",
      },
      {
        text: "Sim",
        onPress: async () => {
          if (type === 'comentário' && commentId) {
            await removeComment(commentId);
          }
          if (type === 'evento' && eventId) {
            await removeEvent(eventId);
          }
          onRefresh();
        },
      },
    ]);
  };

  return (
    <TouchableOpacity onPress={handleAlert} style={[styles.button, { backgroundColor: '#ed7781' }]}>
      <Ionicons name="trash" size={24} color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 40,
  },      
});
