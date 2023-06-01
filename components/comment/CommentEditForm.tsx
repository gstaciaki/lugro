import React, { useState, useEffect } from "react";
import { Alert, Button, ScrollView, Text, TextInput, View } from "react-native";
import { useModal } from "../ModalProvider";
import useDocument from "../../hook/useDocument";
import styles from "./styles";
import { CommentProps } from "../../types/Comment";

interface CommentEditFormProps {
  eventId: string,
  commentId: string,
  onSubmit: (
    description: string,
    rating: string,
    id: string,
    ) => void;
}

export default function CommentEditForm({ eventId, commentId, onSubmit } : CommentEditFormProps) {
  const { data, loading } = useDocument<CommentProps>('/events/'+eventId+'/comments', commentId);

  const modal = useModal();
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');


  useEffect(() => {
    console.log(data)

    if(data){
      setDescription(data.description)
      setRating(data.rating)
    }
  }, [data])

  if(loading){
    return (
      <Text>Loading</Text>
    )
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.field}>
        <Text style={styles.label}>Descrição do evento</Text>
        <TextInput style={styles.input} onChangeText={setDescription} value={description}/>
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Nota</Text>
        <TextInput style={styles.input} onChangeText={setRating} value={rating}/>
      </View> 

      <View style={styles.buttonArea}>
        <Button title="Salvar" onPress={() => onSubmit(description, rating, commentId)} />        
        <Button title="Fechar" onPress={() => modal.hide()} />
      </View>
    </ScrollView>
  );
}
