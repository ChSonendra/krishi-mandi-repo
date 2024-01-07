import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';
import InfoTextBox from './ui/InfoTextBox';

const NoNewUpdates: React.FC = () => {
  return (
    <>
      <InfoTextBox>
        <Text style={styles.noNewUpdatesText}>
        </Text>
      </InfoTextBox>
      <View
        style={{
          flex: 1,
          alignContent: 'center',
          justifyContent: 'center',
          marginTop: 50,
        }}>
        <LottieView
          style={styles.image1}
          source={require('../../assets/images/splash3.json')}
          autoPlay
          loop
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  noNewUpdatesText: {
    fontSize: 15,
    fontWeight: 'normal',
    color: '#023047',
  },
  image1: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    width: 150,
    height: 150,
  },
});

export default NoNewUpdates;
