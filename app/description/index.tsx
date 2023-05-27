import { useRouter, useSearchParams } from 'expo-router';
import { FlatList, Image, ScrollView, Alert, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles'
import _ComponentComment from './_ComponentComment';
import useCollection from '../../hook/useCollection';
// import { Comment, Event } from '../../hook/useCollection';
import useDocument from '../../hook/useDocument';
import { useTheme } from '../../context/themeContext';
import ThemeSelector from '../../components/ThemeSelector';
import { useModal } from '../../components/ModalProvider';
import { EventProps } from '../../types/Event';
import { CommentProps } from '../../types/Comment';
import CommentForm from '../../components/CommentForm';


export default function Index() {
  const {eventId} = useSearchParams()
  const modal = useModal();
  const { data: event, loading: eventLoading } = useDocument<EventProps>('events', eventId as string);
  const { data: commentsData, loading: commentsLoading, create, refreshData} = useCollection<CommentProps>(`events/${eventId}/comments`);

  const { theme } = useTheme();
  const bgColor = theme == 'dark' ? '#000000' : '#EEEFFD';

  const addComment = () => {
    modal.show(<CommentForm onSubmit={handleSubmit} />);
  };

  const handleSubmit = async (
    description: string,
    rating: string
  ) => {
    try {
      const commentData = {
          description: description,
          rating: rating
        };
      const newComment: CommentProps = commentData;
      await create( newComment );
      await refreshData();
      modal.hide();
    } catch (error: any) {
      Alert.alert("Falha adicionar comentário", error.toString());
    }
  };


  if (commentsLoading || eventLoading) {
    return <View style={styles.container}><Text>Loading...</Text></View>;
  }
  
  const renderItem = ({ item }: { item: CommentProps }) => (
    <View style={styles.commentContainer}>
      <_ComponentComment comment={item} />
    </View>
  );

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ThemeSelector>
      </ThemeSelector>
      <View style={[styles.container, {backgroundColor: bgColor}]}>
        {event ? (
          <>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={require("../../assets/restaurant.jpg")} />
            </View>
            <Text style={styles.companieName}>{event.title}</Text>
            <View style={styles.descriptionContainer}>
              <ScrollView style={styles.textContainer}>
                <Text style={styles.descriptionText}>{event.description}</Text>
              </ScrollView>
            </View>
            <View style={styles.ratingStarsContainer}>
              <View style={styles.ratingStarsContent}>
                <Image source={require('../../assets/stars.png')} style={styles.starImg} />
                <Text style={styles.ratingText}>(3) Avaliações</Text>
              </View>
            </View>
            
            <TouchableOpacity onPress={addComment}>
              <Text style={styles.commentText}>Adicionar comentários</Text>
            </TouchableOpacity>

            <FlatList
              data={commentsData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
              contentContainerStyle={styles.container}
            />
          </>
        ) : (
          <View style={styles.container}><Text>Loading...</Text></View>
        )}
      </View>
    </ScrollView>
  );
}
