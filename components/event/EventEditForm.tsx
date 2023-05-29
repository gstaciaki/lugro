import React, { useState, useEffect } from "react";
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { useModal } from "../ModalProvider";
import SelectDropdown from "react-native-select-dropdown";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import useDocument from "../../hook/useDocument";
import { EventProps } from "../../types/Event";
import styles from "./styles";
import useCollection from "../../hook/useCollection";
import { CategoryProps } from "../../types/Category";

interface EventEditFormProps {
  eventId: string;
  onSubmit: (
    id: string,
    title: string,
    description: string,
    local: string,
    date: string,
    category: string
  ) => void;
}

export default function EventEditForm({ eventId, onSubmit }: EventEditFormProps) {
  const modal = useModal();
  const { data, upsert, loading } = useDocument<EventProps>("events", eventId);
  const { data: categories, loading:categoriesLoading } = useCollection<CategoryProps>("categories");

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [local, setLocal] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleConfirm = (selectedDate: Date) => {
    const formattedDate = selectedDate.toLocaleDateString('pt-BR');
    setDate(formattedDate);
    hideDatePicker();
  };

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setDescription(data.description);
      setLocal(data.local);
      setDate(data.date);
      setCategory(data.category);
      console.log(data);
    }
  }, [data]);

  if (categoriesLoading || loading) {
    return <Text>Loading...</Text>;
  }
  
  const listItems = categories.map((category) => category.name);
  if(loading || categoriesLoading){
    return (
      <Text>Loading</Text>
    )
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.field}>
        <Text style={styles.label}>Título</Text>
        <TextInput style={styles.input} onChangeText={setTitle} value={title} />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Descrição do evento</Text>
        <TextInput style={styles.input} onChangeText={setDescription} value={description} />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Data</Text>
        <TextInput style={styles.input}>{date}</TextInput>
        <Button title="Escolher data" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          pickerContainerStyleIOS={styles.datePicker}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Local</Text>
        <TextInput style={styles.input} onChangeText={setLocal} value={local} />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Categoria</Text>
        <SelectDropdown
          data={listItems}
          onSelect={(category) => setCategory(category)}
          defaultValue={category}
          defaultButtonText="Selecione uma opção"
          buttonStyle={styles.dropdownBtn}
          buttonTextStyle={styles.dropdownTxt}
          rowStyle={styles.dropdownRow}
          rowTextStyle={styles.dropdownRowTxt}
          selectedRowStyle={styles.dropdownSelectedRow}
        />
      </View>

      <View style={styles.buttonArea}>
        <Button title="Salvar" onPress={() => onSubmit(eventId, title, description, local, date, category)} />
        <Button title="Fechar" onPress={() => modal.hide()} />
      </View>
    </ScrollView>
  );
}
