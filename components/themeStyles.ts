import { StyleSheet } from "react-native";


const themeStyles = StyleSheet.create({
  button: {
    display: 'flex',
    backgroundColor: '#666666',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    height: 50,
    marginBottom: 30,
    padding: 10
  },
  img:{
    height: 50,
    width: 50
  },
  text:{
    color: '#FFFFFF',
    marginTop: 14,
    marginLeft: 1,
    fontWeight: 'bold',
  }

});

export default themeStyles;