import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: '#EEEFFD',
    },
    title: {
      color: '#252C53',
      backgroundColor: '#EEEFFD',
      paddingTop: 20,
      paddingBottom: 20,
      fontSize: 35,
      fontWeight: 'bold',
      textShadowColor: 'rgba(0, 0, 0, 0.1)',
      textShadowOffset: {width: 4, height: 4},
      textShadowRadius: 10,
      textAlign: 'left',
      alignItems: 'flex-start',
      paddingLeft: '10%',
    }
});

export default styles;