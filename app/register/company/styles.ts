import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 50,
      paddingTop: 30
    },
    logo: {
      flex: 1
    },
    content: {
        flex: 1,
        backgroundColor: '#99D14C',
        borderRadius: 27,
        width: '85%',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
      color: '#252C53',
      backgroundColor: '#FFF',
      paddingTop: 20,
      fontSize: 35,
      fontWeight: 'bold',
      textShadowColor: 'rgba(0, 0, 0, 0.1)',
      textShadowOffset: {width: 4, height: 4},
      textShadowRadius: 10,
      textAlign: 'left',
      alignItems: 'flex-start',
      paddingLeft: '10%',
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
    returnButton: {
      display: 'flex',
      backgroundColor: '#F9D415',
      borderRadius: 15,
      width: '90%',
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15,
      marginBottom: 30,
      shadowColor: '#171717',
      shadowOffset: {width: -4, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    signInbutton: {
      display: 'flex',
      backgroundColor: '#2E61AD',
      borderRadius: 15,
      width: '90%',
      height: 40,
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
      fontSize: 18,
      fontWeight: 'bold',
      textShadowColor: 'rgba(0, 0, 0, 0.1)',
      textShadowOffset: {width: 4, height: 4},
      textShadowRadius: 10
    }
});

export default styles;