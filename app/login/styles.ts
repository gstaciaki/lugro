import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 50,
      paddingTop: 50
    },
    logo: {
      flex: 1
    },
    content: {
        flex: 1,
        backgroundColor: '#99D14C',
        borderRadius: 27,
        width: '85%',
        height: '55%',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
      padding: 5,
      margin: 10,
      height: 55,
      borderWidth: 1,
      borderColor: 'white',
      width: '90%',
      backgroundColor: 'white',
      borderRadius: 10,
      justifyContent: 'center',
    },
    button: {
      display: 'flex',
      backgroundColor: '#8870E6',
      borderRadius: 15,
      width: '65%',
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15,
      marginBottom: 30,
    },
    textButton: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: 'bold'
    }
});

export default styles;