import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface StarRatingProps {
  rating: number;
  onPress: (rating: number) => void;
}

const StarRatingInput = ({ rating, onPress }: StarRatingProps) => {
  const renderStar = (position: number) => {
    const isFilled = position <= rating;
    const iconName = isFilled ? "md-star" : "md-star-outline";

    return (
      <TouchableOpacity key={position} onPress={() => onPress(position)}>
        <Ionicons name={iconName} size={32} color={isFilled ? "gold" : "gray"} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flexDirection: "row" }}>
      {renderStar(1)}
      {renderStar(2)}
      {renderStar(3)}
      {renderStar(4)}
      {renderStar(5)}
    </View>
  );
};

export default StarRatingInput;
