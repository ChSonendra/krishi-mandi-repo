import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Title } from 'react-native-paper'; // Import Card and Title from react-native-paper

const AccountsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Settings</Title>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Cart')}
      >
        <Text style={styles.cardTitle}>Cart Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Orders')}
      >
        <Text style={styles.cardTitle}>Orders Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.cardTitle}>Profile Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5', // Background color for the entire screen
    padding: 20, // Add padding to the entire screen
  },
  title: {
    fontSize: 28, // Increased font size for the title
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginVertical: 10,
    padding: 20, // Add padding to the card
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default AccountsScreen;
