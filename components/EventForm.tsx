import React, { useState } from "react";
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import SelectDropdown from 'react-native-select-dropdown';
import { useModal } from "./ModalProvider";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import useCollection from "../hook/useCollection";

interface Event {
  title: string;
  description: string;
  date: string;
  local: string;
  category: string;
}

interface EventFormProps {
  onSubmit: (title: string,
    description: string,
    local: string,
    date: string,
    category: string) => void;
}

export default function EventForm({ onSubmit }: EventFormProps) {
  const { data, create, refreshData } = useCollection<Event>("events");

  const categories = ['Cervejada', 'Panka', 'Show', 'Lutas', 'Encontro de carros'];
  const modal = useModal();
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

  const saveEvent = async () => {
    try {
      await create({ title, description, local, date, category });
      await refreshData();
      modal.hide();
    } catch (error: any) {
      Alert.alert("Falha ao criar evento", error.toString());
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.field}>
        <Text style={styles.label}>Título</Text>
        <TextInput style={styles.input} onChangeText={setTitle} />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Descrição do evento</Text>
        <TextInput style={styles.input} onChangeText={setDescription} />
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
        <TextInput style={styles.input} onChangeText={setLocal} />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Categoria</Text>
        <SelectDropdown
          data={categories}
          onSelect={(category) => setCategory(category)}
          defaultButtonText='Selecione uma opção'
          buttonStyle={styles.dropdownBtn}
          buttonTextStyle={styles.dropdownTxt}
          rowStyle={styles.dropdownRow}
          rowTextStyle={styles.dropdownRowTxt}
          selectedRowStyle={styles.dropdownSelectedRow}
        />
      </View>

      <View style={styles.buttonArea}>
        <Button title="Salvar" onPress={() => onSubmit(title,description,local,date,category)} />        
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
