import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: 700
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

export default styles