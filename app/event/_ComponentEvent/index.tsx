import { useRouter } from "expo-router";
import {
  Image, Text,
  TouchableOpacity,
  View
} from "react-native";
import { EventProps } from "..";
import styles from "./styles";

interface ComponentEventProps {
  event: EventProps;
}

export default function ComponentEvent({ event }: ComponentEventProps) {
  const router = useRouter();
  
  const onPress = () => {
    router.push({
      pathname: "/description"
    })
  }

  return (
    <View style={[styles.container, { backgroundColor: event.color}]}>
      <Image style={styles.image} source={event.imageSource}></Image>

      <View>        
          <Text style={styles.title}>{event.title}</Text>

        <TouchableOpacity onPress={onPress}>
          <Text style={styles.buttonText}>Sobre a empresa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
