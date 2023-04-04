import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    header: {
      flex: 1,
      backgroundColor: '#EEEFFD',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 80, 
      width: "90%",
    },
    logoContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      width: '100%',
      height: 250,
    },
    content: {
        flex: 1,
        // backgroundColor: '#99D14C',
        borderRadius: 27,
        width: '85%',
        height: '55%',
        marginTop: 50,
        marginBottom: 50,
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