import React, { useState } from "react";
import { Alert, Button, ScrollView, Text, TextInput, View } from "react-native";
import { useModal } from "../ModalProvider";
import useCollection from "../../hook/useCollection";
import { CommentProps } from "../../types/Comment";
import styles from "./styles";

interface CommentFormProps {
  onSubmit: (
    description: string,
    rating: string,
    ) => void;
}

export default function CommentForm({ onSubmit } : CommentFormProps) {
  const { data, create, refreshData } = useCollection<CommentProps>("comments");

  const modal = useModal();
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.field}>
        <Text style={styles.label}>Comentário</Text>
        <TextInput style={styles.input} onChangeText={setDescription} />
      </View>     

      <View style={styles.field}>
        <Text style={styles.label}>Nota</Text>
        <TextInput style={styles.input} onChangeText={setRating} />
      </View>

      <View style={styles.buttonArea}>
        <Button title="Salvar" onPress={() => onSubmit(description, rating)} />        
        <Button title="Fechar" onPress={() => modal.hide()} />
      </View>
    </ScrollView>
  );
}