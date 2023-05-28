import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#8870E6',
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
    buttonArea: {
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-evenly"
    }
});

export default styles