import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomHeader = ({ onSearch, onCart, onMenu }) => {
  return (
    <View style={styles.container}>

            <TouchableOpacity onPress={onMenu} style={styles.iconContainer}>
        <Icon name="bars" size={24} color="#000" />
      </TouchableOpacity>
      <TextInput
        placeholder="Search"
        style={styles.searchBox}
        onChangeText={(text) => onSearch(text)}
      />
      <TouchableOpacity onPress={onCart} style={styles.iconContainer}>
        <Icon name="shopping-cart" size={24} color="#000" />
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16, // Increased header height
    backgroundColor: 'lightgreen',
  },
  logo: {
    width: 80,
    height: 40, // Adjust the dimensions according to your logo
  },
  searchBox: {
    flex: 1,
    borderColor: 'transparent', // Remove border color
    borderWidth: 1,
    borderRadius: 5,
    color: '#000', // Change text color to black
    padding: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Slightly transparent white background
  },
  iconContainer: {
    paddingHorizontal: 16,
  },
});

export default CustomHeader;
