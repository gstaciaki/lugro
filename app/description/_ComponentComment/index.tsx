import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import styles from "./styles";
import { CommentProps } from "../../../types/Comment";


interface ComponentCommentProps {
  comment: CommentProps;
}

export default function ComponentComment({ comment }: ComponentCommentProps) {
  
    return (
      <View style={styles.commentBlock}>
        <Text style={styles.commentText}>{comment.description}</Text>      
      </View>
    );
}
