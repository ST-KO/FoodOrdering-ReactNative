import { View, Text } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      {/* Changing the page title */}
      <Stack.Screen options={{ title: "Deatils: " + id }} />
      <Text>Product Details Screen for id: {id}</Text>
    </View>
  );
};

export default ProductDetailsScreen;
