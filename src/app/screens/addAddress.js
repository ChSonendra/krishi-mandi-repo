import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Button, Title, Subheading, Divider } from 'react-native-paper';
import Geolocation from 'react-native-geolocation-service';

Geolocation.setRNConfiguration({
  skipPermissionRequests: false,
  authorizationLevel: 'whenInUse', // or 'always'
});

const AddAddressScreen = ({ route }) => {
  const navigation = useNavigation();
  const [address, setAddress] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [pin, setPin] = useState('');
  const [autoDetectLocation, setAutoDetectLocation] = useState(false);
  const [location, setLocation] = useState(false);

  const handleAddAddress = () => {
    const newAddress = { address, street, city, pin };
    route.params.onAddAddress(newAddress);
    navigation.goBack();
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        setLocation(position);
      },
      error => {
        setLocation(false);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  };

  const handleAutoDetectLocation = () => {
    getLocation();
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Add Delivery Address</Title>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Full Address"
          value={address}
          onChangeText={(text) => setAddress(text)}
        />
      </View>

      <Divider style={styles.divider} />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Street"
          value={street}
          onChangeText={(text) => setStreet(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="City"
          value={city}
          onChangeText={(text) => setCity(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="PIN Code"
          value={pin}
          onChangeText={(text) => setPin(text)}
        />
      </View>

      <Divider style={styles.divider} />

      <View style={styles.autoDetectContainer}>
        <Subheading style={styles.autoDetectText}>Auto Detect Location:</Subheading>
        <TouchableOpacity onPress={handleAutoDetectLocation} style={styles.autoDetectButton}>
          <Button icon="map-marker" mode="contained">
            Auto Detect
          </Button>
        </TouchableOpacity>
      </View>

      <Button
        mode="contained"
        onPress={handleAddAddress}
        style={styles.addButton}
        disabled={!address && !street && !city && !pin && !autoDetectLocation}
      >
        Add Address
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    height: 50,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 16,
  },
  autoDetectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  autoDetectText: {
    fontSize: 16,
    color: 'black',
  },
  autoDetectButton: {
    borderRadius: 5,
    padding: 10,
  },
  addButton: {
    marginTop: 16,
    backgroundColor: '#27ae60',
  },
});

export default AddAddressScreen;
