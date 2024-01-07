import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const categories = [
  { id: 1, name: 'Crops', color: 'orange' },
  { id: 2, name: 'Fruits', color: 'lightgreen' },
  { id: 3, name: 'Dairy Products', color: 'lightblue' },
  // Add more categories as needed
];

const CategoryScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    // You can navigate to a screen showing products within the selected category
    navigation.navigate('ProductsInCategory', { category });
  };

  const onSelectCategory = (category) => {
    setSelectedCategory(category);
    handleCategorySelect(category);
  };

  return (
    <Animated.View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.categoryCard, { backgroundColor: item.color }]}
            onPress={() => onSelectCategory(item)}
          >
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 2,
    height: 120, // Adjust the height as needed
  },
  title: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  categoryCard: {
    width: 80, // Adjust the width as needed
    height: 80, // Adjust the height as needed
    marginRight: 10,
    borderRadius: 40,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 12,
    color: 'white',
  },
});

export default CategoryScreen;
