import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Star = ({ filled } : { filled: boolean}) => {
  return (
    <View style={styles.star}>
      <Ionicons name={filled ? 'star' : 'star-outline'} size={24} color="#FFD700" />
    </View>
  );
};

const styles = StyleSheet.create({
  star: {
    marginHorizontal: 2,
  },
});

export default Star;
