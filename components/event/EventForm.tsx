import React, { useState } from "react";
import { Alert, Button, ScrollView, Text, TextInput, View } from "react-native";
import SelectDropdown from 'react-native-select-dropdown';
import { useModal } from "../ModalProvider";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import useCollection from "../../hook/useCollection";
import styles from "./styles";
import { EventProps } from "../../types/Event";
import { CategoryProps } from "../../types/Category";
import { CompanyProps } from "../../types/Company";
import useAuth from "../../hook/useAuth";

interface EventFormProps {
  onSubmit: (title: string,
    description: string,
    local: string,
    date: string,
    category: string,
    companyEmail: string) => void;
}

export default function EventForm({ onSubmit }: EventFormProps) {
<<<<<<< HEAD
=======
  // const { data, create, loading: eventLoading } = useCollection<EventProps>("events");
>>>>>>> 2342f97 (F_00038 - Logout e save email company em eventos)
  const { data: categories, loading:categoriesLoading } = useCollection<CategoryProps>("categories");
  // const { loading , remove, update, filter, all} = useCollection<CompanyProps>('companies', false);

  const { user, loading: userLoading} = useAuth();

  const { user, loading: userLoading} = useAuth();

  const modal = useModal();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [local, setLocal] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [companyEmail, setCompanyEmail] = useState('');

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleConfirm = (selectedDate: Date) => {
    const formattedDate = selectedDate.toLocaleDateString('pt-BR');
    setDate(formattedDate);
    hideDatePicker();
  };

  if (categoriesLoading) {
    return <Text>Loading...</Text>;


  }if (userLoading) {
    setCompanyEmail(user?.email);
  }


  if (categoriesLoading) {
    return <Text>Loading...</Text>;
  }
  
  if (companyEmail == "") {
    setCompanyEmail(user?.email);
  }

  if (categoriesLoading) {
    return <Text>Loading...</Text>;
  }
  
  const listItems = categories.map((category) => category.name);

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
          data={listItems}
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
        <Button title="Salvar" onPress={() => onSubmit(title,description,local,date,category, companyEmail)} />        
        <Button title="Fechar" onPress={() => modal.hide()} />
      </View>
    </ScrollView>
  );
}