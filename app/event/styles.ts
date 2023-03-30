import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEFFD',
    alignItems: 'center',
    paddingTop: 25
  },
  imageContainer: {
    backgroundColor: "#99D14C",
    width: "20%",
    height: "60%",
    borderRadius: 10,
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 10
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
  textContainer: {
    width: '100%',
    maxHeight: '55%',
    flexGrow: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: '#8870E6',
    width: '30%',
    height: '20%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
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
    width: '80%',
    paddingVertical: 30
  },
  commentBlockOp1: {
    backgroundColor: '#F9ACB3',
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 30,
    justifyContent: 'center'
  },
  commentBlockOp2: {
    backgroundColor: '#C6C9FF',
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 30,
    justifyContent: 'center'
  },
  commentBlockOp3: {
    backgroundColor: '#252C53',
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 30,
    justifyContent: 'center'
  },
  commentBlockOp4: {
    backgroundColor: '#99D14C',
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 30,
    justifyContent: 'center'
  },
  
  commentText1: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '700',
    paddingHorizontal: 50,
  },
  commentText2: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '700',
    paddingHorizontal: 50,
    color: '#fff'
  }
});

export default styles