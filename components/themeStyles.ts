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
  img: {
    height: 50,
    width: 50
  },
  text: {
    color: '#FFFFFF',
    marginTop: 14,
    marginLeft: 1,
    fontWeight: 'bold',
  }

});

export const lightTheme = {
  bgColor: '#EEEFFD',
  bgSvgColor: '#8870E6',
  bgLoginBtn: '#99D14C',
  bgRegisterBtn: '#F9ACB3',
  bgClientBtn: '#99D14C',
  bgCompanyBtn: '#F9ACB3',
  titleColor: '#252C53',
  bgInputColor: '#e6e6e6',
  bgReturnBtn: '#ffe03c',
  textColor: '#EEEFFD',
  bgCircleColor: '#C6dcff',
  bgEventBtn: '#03DAC6',
};

export const darkTheme = {
  bgColor: '#000000',
  bgSvgColor: '#BB86FC',
  bgLoginBtn: '#03DAC6',
  bgRegisterBtn: '#CF6679',
  bgClientBtn: '#03DAC6',
  bgCompanyBtn: '#CF6679',
  titleColor: '#BB86FC',
  bgInputColor: 'white',
  bgReturnBtn: '#F9D415',
  textColor: '#000000',
  bgCircleColor: '#C6C9FF',
  bgEventBtn: '#99D14C',
};

export default themeStyles;