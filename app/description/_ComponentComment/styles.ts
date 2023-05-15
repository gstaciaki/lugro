import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flexDirection: "row",
    backgroundColor: "#F9ACB3",
    width: "100%",
    height: 100,
    borderRadius: 10,
    // marginBottom: 30,
    justifyContent: "space-around",
    alignItems:"center"
  },
  commentBlock: {
    backgroundColor: '#F9ACB3',
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 30,
    justifyContent: 'center'
  },
    
  commentText: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '700',
    paddingHorizontal: 50,
  },
});

export default styles;
