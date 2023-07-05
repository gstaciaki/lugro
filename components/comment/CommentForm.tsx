import React, { useState, useEffect } from "react";
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { useModal } from "../ModalProvider";
import useCollection from "../../hook/useCollection";
import { CommentProps } from "../../types/Comment";
import styles from "./styles";
import StarRatingInput from "../starRating/starRatingInput";

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
        <StarRatingInput rating={parseInt(rating)} onPress={setRating} />
      </View>

      <View style={styles.buttonArea}>
        <Button title="Salvar" onPress={() => onSubmit(description, rating)} />        
        <Button title="Fechar" onPress={() => modal.hide()} />
      </View>
    </ScrollView>
  );
}
