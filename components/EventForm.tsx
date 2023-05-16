import { Button, ScrollView, StyleSheet, Text, TextInput, View, } from "react-native";
import SelectDropdown from 'react-native-select-dropdown';
import { useModal } from "./ModalProvider";
import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";

interface EventFormProps {
    onSubmit: (titulo: string, descricao: string, local: string, data: string, categoria: string) => void;
}

export default function EventForm({ onSubmit }: EventFormProps) {
    const categories = ['Cervejada', 'Panka', 'Show', 'Lutas', 'Encontro de carros'];
    const modal = useModal();
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [local, setLocal] = useState('');
    const [data, setData] = useState('');
    const [categoria, setCategoria] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    
    const hideDatePicker = () => {
    setDatePickerVisibility(false);
    };

    const handleConfirm = (data: any) => {
        setData(data.toLocaleDateString('pt-BR'));
        hideDatePicker();
    };

    return (
        <>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.field}>
                    <Text style={styles.label}>Título</Text>
                    <TextInput style={styles.input} onChangeText={setTitulo}/>
                </View>

                <View style={styles.field}>
                    <Text style={styles.label}>Descrição do evento</Text>
                    <TextInput style={styles.input} onChangeText={setDescricao}/>
                </View>

                <View style={styles.field}>
                    <Text style={styles.label}>Data</Text>
                    <TextInput style={styles.input}>{data}</TextInput>
                    <Button title="Escolher data" onPress={showDatePicker}/>
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
                    <TextInput style={styles.input} onChangeText={setLocal}/>
                </View>

                <View style={styles.field}>
                    <Text style={styles.label}>Categoria</Text>
                    <SelectDropdown
                        data={categories}
                        onSelect={(categoria) => {setCategoria(categoria)}}
                        defaultButtonText='Selecione uma opção'
                        buttonStyle={styles.dropdownBtn}
                        buttonTextStyle={styles.dropdownTxt}
                        rowStyle={styles.dropdownRow}
                        rowTextStyle={styles.dropdownRowTxt}
                        selectedRowStyle={styles.dropdownSelectedRow}
                    />
                </View>


                <View style={styles.buttonArea}>
                    <Button title="Salvar" onPress={() => onSubmit(titulo, descricao, local, data, categoria)}/>
                    <Button title="Fechar" onPress={() => modal.hide()} />
                </View>
            </ScrollView>
        </>
    )
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
    buttonSave: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    datePicker: {
        backgroundColor: 'black'
    }
});