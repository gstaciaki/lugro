import React, { useState, useEffect } from "react";
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { useModal } from "./ModalProvider";
import useCollection from "../hook/useCollection";
import SelectDropdown from "react-native-select-dropdown";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function EventEditForm({ eventId, onSubmit }) {
  const modal = useModal();
  const { data, update } = useCollection(`events/${eventId}`);
  const categories = ['Cervejada', 'Panka', 'Show', 'Lutas', 'Encontro de carros'];
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const [event, setEvent] = useState({
    title: "",
    description: "",
    date: "",
    local: "",
    category: ""
  });

  useEffect(() => {
    if (data) {
      const { title, description, date, local, category } = data;
      setEvent({ title, description, date, local, category });
    }
  }, [data]);

  const saveEvent = async () => {
    try {
      await update(eventId, event);
      onSubmit();
    } catch (error: any) {
      Alert.alert("Falha ao salvar evento", error.toString());
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.field}>
        <Text style={styles.label}>Título</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEvent({ ...event, title: text })}
          value={event.title}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Descrição do evento</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEvent({ ...event, description: text })}
          value={event.description}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Data</Text>
        <TextInput
          style={styles.input}
          onFocus={showDatePicker}
          value={event.date}
        />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={(date) => {
            setEvent({ ...event, date: date.toISOString() });
            hideDatePicker();
          }}
          onCancel={hideDatePicker}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Local</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEvent({ ...event, local: text })}
          value={event.local}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Categoria</Text>
        <SelectDropdown
          data={categories}
          onSelect={(text) => setEvent({ ...event, category: text })}
          defaultButtonText="Selecione uma opção"
          buttonStyle={styles.dropdownBtn}
          buttonTextStyle={styles.dropdownTxt}
          rowStyle={styles.dropdownRow}
          rowTextStyle={styles.dropdownRowTxt}
          selectedRowStyle={styles.dropdownSelectedRow}
        />
      </View>

      <View style={styles.buttonArea}>
        <Button title="Salvar" onPress={saveEvent} />
        <Button title="Fechar" onPress={() => modal.hide()} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  field: {
    marginBottom: 25,
  },
  label: {
    marginBottom: 8,
    marginLeft: 5,
  },
  input: {
    padding: 5,
    height: 50,
    borderWidth: 1,
    borderColor: "black",
    width: 250,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
  },
  dropdownBtn: {
    width: "90%",
    height: 50,
    backgroundColor: "#444",
    borderRadius: 8,
  },
  dropdownTxt: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },
  dropdownRow: {
    backgroundColor: "#444",
    borderBottomColor: "#C5C5C5",
  },
  dropdownRowTxt: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },
  dropdownSelectedRow: {
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  buttonArea: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  datePicker: {
    backgroundColor: "black",
  },
});
