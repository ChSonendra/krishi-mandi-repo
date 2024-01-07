import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, PermissionsAndroid } from 'react-native';
import { getWeatherData } from './api';
import { Button, FAB } from 'react-native-paper';
import WeatherCard from './weather';  // Make sure to use the correct import path
import Geolocation from '@react-native-community/geolocation';
import CustomHeader from './customHeader';
import { DrawerActions } from '@react-navigation/native';

const FarmerScreen = ({navigation}) => {
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      const data = await getWeatherData(latitude, longitude,'Noida');
      setWeatherData(data);
    } catch (error) {
      // Handle error
    }
  };

  const getCurrentLocation = async() => {
    const data = await getWeatherData(null, null,'Noida');
    setWeatherData(data);
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        fetchWeatherData(latitude.toFixed(6), longitude.toFixed(6));
      },
      (error) => console.error('Error getting location:', error),
      { enableHighAccuracy: false, timeout: 6000, maximumAge: 1000 }
    );
  };
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  useEffect(() => {
    getCurrentLocation();
  }, [navigation]);
  const handleSearch = text => {
    setSearchTerm([])
  const filteredData = product.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
console.log(filteredData);
setSearchTerm(filteredData)
  };
  return (
    <View style={styles.container}>
      {/* Weather card as a banner at the top */}
      <CustomHeader
        onSearch={handleSearch}
        onCart={() => navigation.navigate('Cart')}
        onMenu={() => openDrawer()}
      />
      {weatherData && <WeatherCard data={weatherData} />}

      <View style={styles.contentContainer}>
        {/* <Text style={styles.text}>Welcome to the Farmer Screen!</Text>
        {/* Add your farmer-related UI components and functionality here */}
        {/* <View style={styles.buttonContainer}>
          <Button mode="contained" onPress={getCurrentLocation} style={styles.refreshButton}>
            Refresh Weather
          </Button>
        </View> */} 
      </View>
      <FAB
        style={styles.fab}
        icon="qrcode"
        onPress={() => navigation.navigate('Photo')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Set background color
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: 'lightgreen',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Set text color
  },
  buttonContainer: {
    marginTop: 20,
  },
  refreshButton: {
    backgroundColor: '#4CAF50', // Set button color
  },
});

export default FarmerScreen;
