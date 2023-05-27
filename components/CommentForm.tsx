import React, { useState, useEffect } from "react";
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { useModal } from "./ModalProvider";
import useCollection from "../hook/useCollection";
import SelectDropdown from "react-native-select-dropdown";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import useDocument from "../hook/useDocument";
import { CommentProps } from "../types/Comment";

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
  
  
    // const saveEvent = async () => {
    //   try {
    //     await create({ description, rating });
    //     await refreshData();
    //     modal.hide();
    //   } catch (error: any) {
    //     Alert.alert("Falha ao criar comentário", error.toString());
    //   }
    // };
  
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
  
  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    field: {
      marginBottom: 25,
    },
    label: {
      marginBottom: 8,
      marginLeft: 5
    },
    input: {
      padding: 5,
      height: 50,
      borderWidth: 1,
      borderColor: 'black',
      width: 250,
      backgroundColor: 'white',
      borderRadius: 10,
      justifyContent: 'center',
    },
    dropdownBtn: {
      width: '90%',
      height: 50,
      backgroundColor: '#444',
      borderRadius: 8,
    },
    dropdownTxt: {
      color: '#FFF',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    dropdownRow: {
      backgroundColor: '#444',
      borderBottomColor: '#C5C5C5',
    },
    dropdownRowTxt: {
      color: '#FFF',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    dropdownSelectedRow: {
      backgroundColor: 'rgba(255,255,255,0.2)'
    },
    buttonArea: {
      width: '100%',
      flexDirection: "row",
      justifyContent: "space-evenly"
    },
    datePicker: {
      backgroundColor: 'black'
    }
  });
  