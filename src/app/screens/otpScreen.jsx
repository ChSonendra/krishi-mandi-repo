// OTPScreen.js
import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, Alert,Image} from 'react-native';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { makeApiRequest } from '../services/api';
import { store } from '../redux/store';
import { userDetail } from '../redux/Actions/actionLogin';
function OTPScreen({ navigation, route}) {
  const { mobileNumber } = route.params;
  const [otp, setOTP] = useState(['', '', '', '', '', '']);
  const inputRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
const state=store.getState()
  const handleOTPVerification = () => {
    const enteredOTP = otp.join('');

    if (enteredOTP.length !== 6) {
      Alert.alert('Please enter a valid OTP.');
    } else {
      let Body = {
        mobileNumber:mobileNumber,
        otp: "223455",
      };
      console.log(Body);
      makeApiRequest('consumer/verifyOtp', 'POST', Body).then((e) => {
  const isFarmer = state?.Detail?.user === 'farmer' ? true : false;

        navigation.navigate(isFarmer?'FarmerScreen':'MainNavigator',{token:e.apiResponseData?.token});
         AsyncStorage.setItem('token', "swati");
         store.dispatch(userDetail(e.apiResponseData?.token))
        console.log(e.apiResponseData?.token)})
    }
  };

  const handleInputChange = (text, index) => {
    if (text.length === 1) {
      // Auto-focus to the next input field
      if (index < 5) {
        inputRefs[index + 1].current.focus();
      }
    }

    // Update the OTP array
    const newOTP = [...otp];
    newOTP[index] = text;
    setOTP(newOTP);
  };

  const handleResendCode = () => {
    // Implement your logic to resend the OTP code here
    // You can make an API request to resend the OTP code
    Alert.alert('Resend Code: Implement your logic here');
    navigation.navigate('Login'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OTP Verification</Text>
      <Image
    source={require('../../assets/images/930.png')}
    style={{ width: '100%', height: 300, borderRadius: 2 }}
  />
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={inputRefs[index]}
            style={[styles.input, index > 0 ? { marginLeft: 10 } : null]}
            value={digit}
            onChangeText={text => handleInputChange(text, index)}
            placeholder="0"
            keyboardType="numeric"
            maxLength={1}
          />
        ))}
      </View>
      <Button
        style={styles.verifyButton}
        mode="contained"
        onPress={handleOTPVerification}
      >
        Verify OTP
      </Button>
      <Text style={styles.resendCodeText} onPress={handleResendCode}>
        Resend Code
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 28,
    marginBottom: 40,
    color: 'black',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: 40,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 8, // Add border radius to each input field
  },
  verifyButton: {
    backgroundColor: '#4caf50',
    marginTop: 20,
  },
  resendCodeText: {
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});

export default OTPScreen;
