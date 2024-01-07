import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert, Image  } from 'react-native';
import AppService from '../services/AppService';
import { makeApiRequest } from '../services/api';
import { Modal } from 'react-native-paper';
import TextPin from '../components/ui/TextPin';
import { Button } from 'react-native-paper';
import { green400 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
function LoginScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userInfo, setUserInfo] = useState({
    phoneNumber: '',
    authPin: '',
    confirmauthPin: '',
  });
  const [error, setError] = useState('');
  const { authPin, phone, confirmauthPin } = userInfo;
  const [loading, setLoading] = useState(false);
  const handleLogin = () => {
    if (phoneNumber.trim() === '') {
      Alert.alert('Please enter a valid phone number.');

    } else {
      signUp(phoneNumber)
    }
  };
  const signUp = async (phoneNumber) => {
    setLoading(true);
    try {
      let Body = {
        mobileNumber: phoneNumber,
      };
      makeApiRequest('consumer/sendOtpMobile', 'POST', Body).then((e) => {
        console.log(e)
      navigation.navigate('Otp', { mobileNumber: phoneNumber });

     

      })
      setLoading(false);
      // setModalVisible(true);
      // if (response && response.length != 0) {
      //   setModalVisible(true);
      // }
    } catch (error) {
      console.log(error);
      setLoading(false);
      // setModalVisible(true);
    } finally {
    }
  };
  return (
    <View style={styles.container}>
  <Image
        source={{ uri: 'https://media.licdn.com/dms/image/D4D0BAQEAH5W3chL_Mg/company-logo_200_200/0/1687524964804?e=2147483647&v=beta&t=KUIE8QJh3Y8Z-x4JW7U4shwdP-mzQNuHbCf6gc_INao' }}
        style={styles.banner}
      />
      <TextPin
        mode={'outlined'}

        value={phoneNumber}
        onChange={text => setPhoneNumber(text)}
        placeholder="Phone Number"></TextPin>
          <View style={styles.buttonContainer}>
          <Button
       style={styles.loginButton} 
        mode="contained"
        title="Login"
        onPress={handleLogin} >
        Login
      </Button>
          </View>
  

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white'
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  buttonContainer: {
    marginTop: 300,
    width:"100%"
  },
  banner: {
    width: '100%',
    height: 150, 
    marginBottom: 20, 
  },
  loginButton: {
    backgroundColor: 'green',
  },
});

export default LoginScreen;
