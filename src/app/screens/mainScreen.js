// MainScreen.js

import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { Button } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import { Detail } from '../redux/Actions/actionUser';
import { store } from '../redux/store';
const MainScreen = ({ navigation }) => {
    const handleType=()=>{
      navigation.navigate('Login', { userType: 'farmer' })
      store.dispatch(Detail('farmer'))
    }
  return (
  //   <View style={styles.container}>
  //     <Text style={styles.welcomeText}>Welcome to Your App!</Text>
  //     {/* <Button
  //       title="Get Started"
  //       onPress={() =>{navigation.navigate('Login')
  //   console.log("hiiii");} }
  //     /> */}
  //       <Button icon="camera" mode="contained" onPress={() =>{navigation.navigate('Login')
  //   console.log("hiiii");} }>
  //   Get Started
  // </Button>
  //   </View>
  <View style={styles.container}>
           <Image
        source={{ uri: 'https://media.licdn.com/dms/image/D4D0BAQEAH5W3chL_Mg/company-logo_200_200/0/1687524964804?e=2147483647&v=beta&t=KUIE8QJh3Y8Z-x4JW7U4shwdP-mzQNuHbCf6gc_INao' }}
        style={styles.banner}
      />
  <Animatable.View
    animation="fadeIn"
    duration={2000}
    style={styles.background}>
 
    <Text style={styles.welcomeText}>Buy products or Sell</Text>

  </Animatable.View>
  <View style={styles.buttonsContainer}>
      <Button
        mode="contained"
        style={styles.loginButton} 
        onPress={() =>handleType()}>
        Login as Farmer
      </Button>
      <Button
        mode="contained"
        style={styles.loginButton} 
      onPress={() =>navigation.navigate('Login', { userType: 'farmer' })}>
        Buy Products
      </Button>
    </View>
</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',

  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonsContainer:{
    marginTop:100,
    width:"90%",
    margin:10
  },
  banner: {
    width: '100%',
    height: 150, 
    marginBottom: 20, 
  },
  loginButton: {
    backgroundColor: 'green',
    marginTop:50
  },
});

export default MainScreen;
