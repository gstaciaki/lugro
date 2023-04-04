import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    aspectRatio: 1,
    borderRadius: 10,
  },
  container: {
    flexDirection: "row",
    backgroundColor: "#F9ACB3",
    width: "100%",
    height: 100,
    borderRadius: 10,
    marginBottom: 30,
    justifyContent: "space-around",
    alignItems:"center"
  },
  title: {
    width:'100%',
    textAlign: "center",
    fontSize: 13,
    fontWeight: "700",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff'
  },
});

export default styles;
