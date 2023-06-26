import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
    // height: 250,
  },
  logo: {
    flex: 1
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%'
  },
  greenButton: {
    width: '90%',
    height: 100,
    backgroundColor: '#99D14C',
    borderRadius: 27,
    marginBottom: 36,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  },
  redButton: {
    width: '90%',
    height: 100,
    backgroundColor: '#F9ACB3',
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 33
  }

});

export default styles;
