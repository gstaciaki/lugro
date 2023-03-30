import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EEEFFD',
      alignItems: 'center',
      justifyContent: 'center',
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
    companyButton: {
      display: 'flex',
      backgroundColor: '#F9ACB3',
      borderRadius: 27,
      width: '65%',
      height: '17%',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15,
      marginBottom: 30,
      shadowColor: '#171717',
      shadowOffset: {width: -4, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    textButton: {
      color: '#FFFFFF',
      fontSize: 25,
      fontWeight: 'bold',
      textShadowColor: 'rgba(0, 0, 0, 0.1)',
      textShadowOffset: {width: 4, height: 4},
      textShadowRadius: 10
    },
    disabledbutton: {
      display: 'flex',
      backgroundColor: '#99D14C',
      opacity: 0.6,
      borderRadius: 27,
      width: '65%',
      height: '17%',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 1,
      marginBottom: 30,
      shadowColor: '#171717',
      shadowOffset: {width: -4, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    logoContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      width: '100%',
      height: 250,
    },
    buttonContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%'
    },
});

export default styles;