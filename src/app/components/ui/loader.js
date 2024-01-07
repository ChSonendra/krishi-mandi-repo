import * as React from 'react';
import LottieView from 'lottie-react-native';
import {StyleSheet, View} from 'react-native';

const Loader = props => (
  <View style={styles.myloader}>
    <LottieView
      style={styles.image1}
      source={require('../../../assets/images/loader.json')}
      autoPlay
      loop
    />
  </View>
);
const styles = StyleSheet.create({
  image1: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  myloader: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10,
    backgroundColor: '#ffffff',
    opacity: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});
export default Loader;
