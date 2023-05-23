import { Stack } from "expo-router";
import ModalProvider from "../components/ModalProvider";
import ThemeProvider from "../context/themeContext";

export default function DefaultLayout() {
  // return <Stack screenOptions={
  //   {
  //     headerShown: false
  //   }
  // } />;

  return <ThemeProvider><ModalProvider><Stack /></ModalProvider></ThemeProvider>;
}