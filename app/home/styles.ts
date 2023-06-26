import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  img: {
    position: 'absolute',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  emailText: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingStart: 20,
    paddingTop: 10
  },
  logoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'flex-end',
    paddingEnd: 20,
    paddingTop: 10
  }
});

export default styles;
