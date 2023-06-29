import { useLocalSearchParams, useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList, Alert } from 'react-native';
import styles from './styles';
import defaultStyles from '../styles';
import ComponentEvent from './_ComponentEvent';
import useCollection from '../../hook/useCollection';
import { CommentProps} from "../../types/Comment";
import { EventProps} from "../../types/Event";
import { Ionicons } from "@expo/vector-icons";
import EventEditForm from '../../components/event/EventEditForm';
import { useModal } from '../../components/ModalProvider';
import ThemeSelector from '../../components/ThemeSelector';
import { getThemeStyles, useTheme } from "../../context/themeContext";
import ConfirmDelete from '../../components/ConfirmDelete';
import { useEffect, useState } from 'react';


export default function Index() {
  const modal = useModal();
  const { loading , remove, update, filter, all} = useCollection<EventProps>('events', false);
  const { theme } = useTheme();
  const {bgColor} = getThemeStyles(theme);
  const {category, companyEmail} = useLocalSearchParams()
  const [data, setData] = useState<EventProps[]>([])

  const refreshData = () => {
    if(category){
      filter("category", category as string || "").then(data => {
        setData(data)
      })
    }
    else{
      all().then(data => setData(data))
    }
  }

  useEffect(() => {
    refreshData()
  }, [])

  const refreshComments = async () => {
    await refreshData();
  };
  
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
    category: string,
    companyEmail: string
  ) => {
    try {
      const eventData = 
        {
          id: id,
          title: title,
          description: description,
          local: local,
          date: date,
          category: category,
          companyEmail: companyEmail
        };
      
      const newEvent: EventProps = eventData;
      await update(id, newEvent);
      await refreshData();
      modal.hide();
    } catch (error: any) {
      Alert.alert("Falha ao criar evento", error.toString());
    }
  };

  const renderItem = ({ item, index }: { item: EventProps, index: number }) => (
    <View style={[styles.commentContainer, {marginTop: 30}]}>
      <ComponentEvent event={item} color={index}/>
      <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={()=> onEdit(item.id!)} style={[styles.button, { backgroundColor: '#898cc7' }]}>
            <Ionicons name="pencil" size={24} color="white" />
          </TouchableOpacity>
          <ConfirmDelete type={'evento'} eventId={item.id!} onRefresh={refreshComments}/>
        </View>
    </View>
  );

  return (
    <View style={{backgroundColor: bgColor, flex:1}}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={{flexGrow: 1, justifyContent:'center', alignItems:'center'}}
      />
       <ThemeSelector>
      </ThemeSelector>
    </View>
  );
}