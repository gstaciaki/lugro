import { useRouter, useSearchParams } from 'expo-router';
import { FlatList, Image, ScrollView, Alert, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import defaultStyles from '../styles';
import _ComponentComment from './_ComponentComment';
import useCollection from '../../hook/useCollection';
import useDocument from '../../hook/useDocument';
import { useTheme } from '../../context/themeContext';
import ThemeSelector from '../../components/ThemeSelector';
import { useModal } from '../../components/ModalProvider';
import { EventProps } from '../../types/Event';
import { CommentProps } from '../../types/Comment';
import CommentEditForm from '../../components/comment/CommentEditForm';
import CommentForm from '../../components/comment/CommentForm';
import { Ionicons } from "@expo/vector-icons";
import ConfirmDelete from '../../components/ConfirmDelete';
import StarRating from '../../components/starRating/starRating';

export default function Index() {
  const { eventId } = useSearchParams();
  const modal = useModal();
  const { data: event, loading: eventLoading } = useDocument<EventProps>('events', eventId as string);
  const { data: commentsData, loading: commentsLoading, create, update, remove, refreshData } = useCollection<CommentProps>(`events/${eventId}/comments`);

  const { theme } = useTheme();
  const bgColor = theme == 'dark' ? '#000000' : '#EEEFFD';

  const rating = (commentsData.map(e => parseInt(e.rating)).reduce((partialSum, a) => partialSum + a, 0)) / commentsData.length
  console.log(rating)
  

  const refreshComments = async () => {
    await refreshData();
  };

  const addComment = () => {
    modal.show(<CommentForm onSubmit={handleCommentSubmit} />);
  };

  const onEdit = (commentId: string) => {
    modal.show(<CommentEditForm eventId={eventId as string} commentId={commentId} onSubmit={handleCommentSubmit} />);
  };

  const handleCommentSubmit = async (description: string, rating: string, id?: string) => {
    try {
      const commentData = {
        description: description,
        rating: rating,
      };

      if (id) {
        const commentDataEdit = {
          id: id,
          description: description,
          rating: rating,
        };
        await update(id, commentDataEdit);
      } else {
        await create(commentData);
      }
      await refreshData();
      modal.hide();
    } catch (error: any) {
      const errorMessage = id ? "Falha para editar comentário" : "Falha para adicionar comentário";
      Alert.alert(errorMessage, error.toString());
    }
  };

  if (commentsLoading || eventLoading) {
    return <View style={defaultStyles.container}><Text>Loading...</Text></View>;
  }
  
  const renderItem = ({ item }: { item: CommentProps }) => (
    <View style={styles.commentContainer}>
      <_ComponentComment comment={item} />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => onEdit(item.id!)} style={[styles.button, { backgroundColor: '#898cc7' }]}>
          <Ionicons name="pencil" size={24} color="white" />
        </TouchableOpacity>

        <ConfirmDelete type={'comentário'} eventId={eventId as string} commentId={item.id!} onRefresh={refreshComments} />
      </View>
    </View>
  );

  return (
    <View style={[{ flexGrow: 1 }, {backgroundColor: bgColor}]}>
      <View style={[defaultStyles.container, { backgroundColor: bgColor }]}>
        {event ? (
          <>
            {/* <View style={styles.imageContainer}>
              <Image style={styles.image} source={require("../../assets/restaurant.jpg")} />
            </View> */}
            <Text style={styles.companieName}>{event.title}</Text>
            
            <View style={styles.descriptionContainer}>
              <ScrollView style={styles.textContainer}>
                <Text style={styles.descriptionText}>{event.description}</Text>
              </ScrollView>
            </View>
            
            <View style={styles.ratingStarsContainer}>
              <View style={styles.ratingStarsContent}>
                <StarRating rating={rating}></StarRating>
                <Text style={styles.ratingText}>({commentsData.length}) Avaliações</Text>
              </View>
            </View>
            
            <TouchableOpacity style={styles.buttonComment} onPress={addComment}>
              <Text style={styles.commentText}>
                <Ionicons name="add-circle-outline" size={20} style={styles.icon} color="white" />
                Adicionar comentários
              </Text>
            </TouchableOpacity>

            <FlatList
              data={commentsData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
              contentContainerStyle={{flexGrow: 1}}
            />
          </>
          
        ) : (
          <View style={defaultStyles.container}><Text>Loading...</Text></View>
        )}
      </View>
    </View>
  );
}