import React, {useState, useEffect} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import InfoBox, {InfoBoxType} from '../components/ui/InfoBox';
import CustomButton from './ui/Button';

const CommonDecline = ({navigation, route}) => {
  const {item, deleteHandler} = route.params;
  const [didDecline, setDidDecline] = useState<boolean>(false);

  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: 'white',
      paddingHorizontal: 25,
    },
    image: {
      marginVertical: 66,
    },
    messageContainer: {
      marginTop: 100,
      alignItems: 'center',
    },
    messageText: {
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 100,
    },
    image1: {
      alignSelf: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      width: 180,
      height: 180,
    },
  });

  const onDoneTouched = () => {
    navigation.getParent()?.navigate('Dashboard');
  };

  return (
    <SafeAreaView style={[styles.container]}>
      {didDecline && <StatusBar hidden={true} />}
      <View style={[{marginTop: 60}]}>
        {!didDecline && (
          <>
            <InfoBox
              notificationType={InfoBoxType.Warn}
              title={'Are you sure you want to delete this connection?'}
              description={
                'In order to make the connection again, you will need to scan again with the invitation QR code.'
              }
            />

            <View style={{marginVertical: 45}}>
              <CustomButton
                text={'Yes, delete this connection'}
                submit={() => {
                  navigation.pop();
                  deleteHandler(item);
                }}
              />
              <View style={[{marginTop: 20}]}>
                <CustomButton
                  text={'No, go back'}
                  submit={() => {
                    navigation.pop();
                  }}
                />
              </View>
            </View>
          </>
        )}

        {didDecline && (
          <>
            <View style={[styles.messageContainer]}>
              <>
                <LottieView
                  style={styles.image1}
                  source={require('../../assets/images/splash4.json')}
                  autoPlay
                  loop
                />
                <Text style={styles.messageText}>{'Connection Deleted..'}</Text>
                <View style={{marginTop: 50}}>
                  <CustomButton
                    text={'Done'}
                    submit={() => {
                      onDoneTouched();
                    }}
                  />
                </View>
              </>
              
            </View>
            <View></View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default CommonDecline;
