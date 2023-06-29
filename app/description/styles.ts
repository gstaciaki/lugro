import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: "#99D14C",
    width: "85%",
    height: 225, //ou 30%
    borderRadius: 10,
    alignItems: 'center',
    padding: 10
  },
  image: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
  },
  companieName: {
    fontSize: 40,
    paddingTop: 25,
    paddingBottom: 25,
    fontWeight: '700',
    color: '#252C53',
  },
  descriptionContainer: {
    backgroundColor: '#E4E4E4',
    width: '80%',
    height: 150,
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  descriptionText: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 10,
  },
  textContainer: {
    width: '100%',
    maxHeight: '55%',
    flexGrow: 1,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff'
  },
  ratingStarsContainer: {
    marginTop: 25,
    height: 25,
    width: '80%',
  },
  ratingStarsContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  starImg: {
    width: 150,
    height: 24,
  },
  ratingText: {
    marginLeft: 25,
    fontSize: 13,
    fontWeight: '700',
  },
  commentContainer: {
    minWidth: '95%',
    paddingVertical: 30
  },
  commentText: {
    fontSize: 16,
    fontWeight: '700',
  },
  button: {
    borderRadius: 5,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 40,
  },      
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: 'flex-end',
    alignItems: "flex-start",
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginBottom: 10,
  },
  buttonComment: {
      width: '60%',
      height: 40,
      backgroundColor: '#99D14C',
      borderRadius: 27,
      marginBottom: 36,
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'center'
  }
});

export default styles