import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList, Alert } from 'react-native';
import styles from './styles';
import ComponentEvent from './_ComponentEvent';
import useCollection from '../../hook/useCollection';
import { CommentProps} from "../../types/Comment";
import { EventProps} from "../../types/Event";
import { Ionicons } from "@expo/vector-icons";
import EventEditForm from '../../components/event/EventEditForm';
import { useModal } from '../../components/ModalProvider';
import ThemeSelector from '../../components/ThemeSelector';
import { useTheme } from "../../context/themeContext";


// const btnColors = ['#ed7781', '#898cc7', '#283685', '#3e610e'];

export default function Index() {
  const modal = useModal();
  const { data, loading , remove, update, refreshData} = useCollection<EventProps>('events');
  const { theme } = useTheme();
  
  const bgColor = theme == 'dark' ? '#000000' : '#EEEFFD';
  const bgSvgColor = theme == 'dark' ? '#BB86FC' : '#8870E6';
  const bgCircleColor = theme == 'dark' ? '#C6dcff' : '#C6C9FF';
  const bgEventBtn = theme == 'dark' ? '#03DAC6' : '#99D14C';
  const bgRegisterBtn = theme == 'dark' ? '#CF6679' : '#F9ACB3';

  if (loading) {
    return <View style={styles.container}><Text>Loading...</Text></View>;
  }

  if (!data) {
    return <View style={styles.container}><Text>Nenhum evento foi encontrado.</Text></View>;
  }

  const onEdit = (eventId: string) => {
    modal.show(<EventEditForm eventId={eventId} onSubmit={handleSubmit} />);
  };

  const handleSubmit = async (
    id: string,
    title: string,
    description: string,
    local: string,
    date: string,
    category: string
  ) => {
    try {
      const eventData = 
        {
          id: id,
          title: title,
          description: description,
          local: local,
          date: date,
          category: category
        };
      
      const newEvent: EventProps = eventData;
      await update(id, newEvent);
      await refreshData();
      modal.hide();
    } catch (error: any) {
      Alert.alert("Falha ao criar evento", error.toString());
    }
  };

  const renderItem = ({ item }: { item: EventProps }) => (
    <View style={styles.commentContainer}>
      <ComponentEvent event={item} />
      <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={()=> onEdit(item.id!)} style={[styles.button, { backgroundColor: '#898cc7' }]}>
            <Ionicons name="pencil" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity onPress={async () => {
              await remove(item.id!);
              await refreshData();
            }} style={[styles.button, { backgroundColor: '#ed7781' }]}>
            <Ionicons name="trash" size={24} color="white" />
          </TouchableOpacity>
        </View>
    </View>
  );

  return (
    <View style={{backgroundColor: bgColor, flex:1}}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
      />
       <ThemeSelector>
      </ThemeSelector>
    </View>
  );
}