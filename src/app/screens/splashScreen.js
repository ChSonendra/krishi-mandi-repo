// SplashScreen.js

import LottieView from 'lottie-react-native';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet ,Image} from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Add a delay to simulate a splash screen.
    setTimeout(() => {
      // Navigate to the main app screen.
      navigation.navigate('Main');
    }, 5000); // 2000 milliseconds (2 seconds)
  }, []);

  return (
    <View style={styles.container}>
       <Image
        source={{ uri: 'https://media.licdn.com/dms/image/D4D0BAQEAH5W3chL_Mg/company-logo_200_200/0/1687524964804?e=2147483647&v=beta&t=KUIE8QJh3Y8Z-x4JW7U4shwdP-mzQNuHbCf6gc_INao' }}
        style={styles.logo}
      />
            <LottieView
        style={styles.logo}
        source={require('../../assets/images/data.json')}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
  logo: {
    // fontSize: 24,
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
