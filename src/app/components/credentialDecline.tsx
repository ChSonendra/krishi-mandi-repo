import React, {useState, useEffect} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProofRequestDeclined from '../assets/img/credential-declined.svg';

import InfoBox, {InfoBoxType} from './ui/InfoBox';
import CustomButton from './ui/Button';

const CredentialDecline = ({navigation, route}) => {
  const {itemId, deleteHandler} = route.params;
  const [didDecline, setDidDecline] = useState<boolean>(false);
  const imageDisplayOptions = {
    fill: 'white',
    height: 250,
    width: 250,
  };
  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: 'white',
      paddingHorizontal: 25,
    },
    image: {
      marginVertical: 10,
    },
    messageContainer: {
      marginTop: 10,
      alignItems: 'center',
    },
    messageText: {
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 16,
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

  const confirmDeclineTouched = async () => {
    try {
      navigation.navigate('Notifications', {itemId});
      deleteHandler(itemId);
      navigation.setOptions({headerShown: false});
      setDidDecline(true);
    } catch (err: unknown) {}
  };

  return (
    <SafeAreaView style={[styles.container]}>
      {didDecline && <StatusBar hidden={true} />}
      <View style={[{marginTop: 60}]}>
        {!didDecline && (
          <>
            <InfoBox
              notificationType={InfoBoxType.Warn}
              title={'Are you sure you want to delete this credential?'}
              description={
                'In order to receive the credential again, you will need to reapply with the issuer.'
              }
            />

            <View style={{marginVertical: 45}}>
              <CustomButton
                text={'Yes, delete this credential'}
                submit={confirmDeclineTouched}
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
              <View>
                <Text style={styles.messageText}>{'Credential Deleted'}</Text>
                <ProofRequestDeclined
                  style={[styles.image]}
                  {...imageDisplayOptions}
                />

                <View style={{marginTop: 0}}>
                  <CustomButton
                    text={'Done'}
                    submit={() => {
                      onDoneTouched();
                    }}
                  />
                </View>
              </View>
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default CredentialDecline;
