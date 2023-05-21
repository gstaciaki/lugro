import { Link, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList, Alert } from 'react-native';
import styles from './styles';
import ComponentEvent from './_ComponentEvent';
import useCollection from '../../hook/useCollection';
import { Event } from '../../hook/useDocument';
import { Ionicons } from "@expo/vector-icons";
import EventEditForm from '../../components/EventEditForm';
import { useModal } from '../../components/ModalProvider';


// const btnColors = ['#ed7781', '#898cc7', '#283685', '#3e610e'];

export default function Index() {
  const modal = useModal();
  const { data, loading , remove, update, refreshData} = useCollection<Event>('events');

  if (loading) {
    return <View style={styles.container}><Text>Loading...</Text></View>;
  }

  if (!data) {
    return <View style={styles.container}><Text>Nenhum evento foi encontrado.</Text></View>;
  }

  const onEdit = (eventId: string) => {
    modal.show(<EventEditForm eventId={eventId} onSubmit={handleSubmit} />);
  };

  const handleSubmit = async (eventId: string, title: string, description: string, local: string, date: string, category: string) => {
    try {
      const updatedEvent = {
        id: eventId,
        title,
        description,
        local,
        date,
        category,
      };

      await update(eventId, updatedEvent);
      await refreshData();
      modal.hide();
    } catch (error: any) {
      Alert.alert('Falha ao atualizar evento', error.toString());
    }
  };

  const renderItem = ({ item }: { item: Event }) => (
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
    <ScrollView>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
      />
    </ScrollView>
  );
}