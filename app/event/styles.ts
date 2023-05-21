import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  commentContainer: {
    width: '80%',
    paddingVertical: 30
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: 'flex-end',
    alignItems: "flex-start",
  },  
  button: {
    borderRadius: 5,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles