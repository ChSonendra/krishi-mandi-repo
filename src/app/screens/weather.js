import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Icon } from 'react-native-elements';

const WeatherCard = ({ data }) => {
  const weatherIcon = data.weather[0].icon;

  // Function to map weather conditions to corresponding colors
  const getBackgroundColor = () => {
    const condition = data.weather[0].main.toLowerCase();

    switch (condition) {
      case 'thunderstorm':
        return ['#373B44', '#4286f4']; // Dark blue to light blue
      case 'drizzle':
      case 'rain':
        return ['#4DA0B0', '#D39D38']; // Blue to yellow
      case 'snow':
        return ['#7DE2FC', '#B9B6E5']; // Light blue to light purple
      case 'clear':
        return ['#FF7300', '#FEF253']; // Orange to yellow
      case 'clouds':
        return ['#D7D2CC', '#304352']; // Light gray to dark gray
      default:
        return ['#D7D2CC', '#304352']; // Default to gray
    }
  };

  const backgroundColors = getBackgroundColor();

  return (
    <Card containerStyle={[styles.card, { backgroundColor: backgroundColors[0] }]}>
      <View style={styles.header}>
        <Text style={[styles.city, { color: backgroundColors[1] }]}>{data.name}</Text>
        <Text style={[styles.temperature, { color: backgroundColors[1] }]}>{Math.round(data.main.temp)}°C</Text>
      </View>
      <View style={styles.details}>
        <Text style={[styles.description, { color: backgroundColors[1] }]}>{data.weather[0].description}</Text>
        <View style={styles.iconContainer}>
          <Icon name="thermometer" type="font-awesome" size={20} color={backgroundColors[1]} />
          <Text style={[styles.infoText, { color: backgroundColors[1] }]}>{data.main.feels_like}°C (Feels like)</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon name="tint" type="font-awesome" size={20} color={backgroundColors[1]} />
          <Text style={[styles.infoText, { color: backgroundColors[1] }]}>{data.main.humidity}% Humidity</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon name="flag" type="font-awesome" size={20} color={backgroundColors[1]} />
          <Text style={[styles.infoText, { color: backgroundColors[1] }]}>{data.wind.speed} m/s Wind Speed</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    margin: 16,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  city: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  temperature: {
    fontSize: 24,
  },
  details: {
    marginTop: 10,
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  infoText: {
    marginLeft: 5,
    fontSize: 16,
  },
});

export default WeatherCard;
