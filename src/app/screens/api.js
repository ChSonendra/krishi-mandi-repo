// api.js
import axios from 'axios';

const API_KEY = '4e4ba7ef05de3839b2375a64eeabb8b5';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const getWeatherData = async (latitude, longitude, city) => {
  console.log(latitude,longitude,city);
  try {
    let apiUrl;
    
    if (latitude && longitude) {
      apiUrl = `${BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    } else if (city) {
      apiUrl = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    } else {
      throw new Error('Latitude and longitude or city name are required.');
    }

    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error.response ? error.response.data : error.message);
    // throw error;
  }
};

export { getWeatherData };
