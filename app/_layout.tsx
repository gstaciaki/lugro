import { Stack } from "expo-router";
import ModalProvider from "../components/ModalProvider";

export default function DefaultLayout() {
  // return <Stack screenOptions={
  //   {
  //     headerShown: false
  //   }
  // } />;

  return <ModalProvider><Stack /></ModalProvider>;
}