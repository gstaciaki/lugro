import { useRouter } from "expo-router";
import {
  Image, Text,
  TouchableOpacity,
  View
} from "react-native";
import { Event } from "..";
import styles from "./styles";

interface ComponentEventProps {
  event: Event;
}

export default function ComponentEvent({ event }: ComponentEventProps) {
  const router = useRouter();
  
  const onPress = () => {
    router.push({
      pathname: "/description"
    })
  }

  return (
    <View style={[styles.container, { backgroundColor: '#F9ACB3'}]}>
      <Image style={styles.image} source={event.imageSource}></Image>

      <View>        
          <Text style={styles.title}>{event.title}</Text>

        <TouchableOpacity onPress={onPress}>
          <Text style={styles.buttonText}>Ver mais..</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
