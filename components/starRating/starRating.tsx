import React from 'react';
import { View } from 'react-native';
import Star from './Star';

const StarRating = ({ rating } : { rating: number}) => {
  const filledStars = Math.floor(rating || 0);
  const remainingStars = 5 - filledStars;

  return (
    <View style={{ flexDirection: 'row' }}>
      {[...Array(filledStars)].map((_, index) => (
        <Star key={index} filled={true} />
      ))}
      {[...Array(remainingStars)].map((_, index) => (
        <Star key={index + filledStars} filled={false} />
      ))}
    </View>
  );
};

export default StarRating;
