// EditProfileScreen.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';

const EditProfileScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { name, email, phone, onSave } = route.params;

  const [newName, setNewName] = useState(name);
  // const [newAddress, setNewAddress] = useState(address);
  const [newEmail, setNewEmail] = useState(email);
  const [newPhone, setNewPhone] = useState(phone);

  const handleSaveChanges = () => {
    onSave(newName, newEmail, newPhone);
    navigation.goBack();

  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Edit Profile" titleStyle={styles.cardTitle} />
        <Card.Content>
          <TextInput label="Name" value={newName} onChangeText={setNewName} style={styles.input} />
          {/* <TextInput label="Address" value={newAddress} onChangeText={setNewAddress} style={styles.input} /> */}
          <TextInput label="Email" value={newEmail} onChangeText={setNewEmail} style={styles.input} />
          <TextInput label="Phone" value={newPhone} onChangeText={setNewPhone} style={styles.input} />
        </Card.Content>
        <Card.Actions style={styles.cardActions}>
          <Button mode="contained" onPress={handleSaveChanges} style={styles.button}>
            Update
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  card: {
    margin: 16,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    marginBottom: 16,
  },
  cardActions: {
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: 'green',
  },
});

export default EditProfileScreen;
