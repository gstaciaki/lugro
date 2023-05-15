import { useRouter } from "expo-router";
import {
  Image, Text,
  TouchableOpacity,
  View
} from "react-native";
import { Comment } from "..";
import styles from "./styles";

interface ComponentCommentProps {
  comment: Comment;
}

export default function ComponentComment({ comment }: ComponentCommentProps) {
  const router = useRouter();
    return (
      <View style={styles.commentBlock}>
        <Text style={styles.commentText}>{comment.description}</Text>
      </View>
    );
}
