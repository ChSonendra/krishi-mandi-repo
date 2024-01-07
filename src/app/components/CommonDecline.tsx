import {CredentialState, ProofState} from '@aries-framework/core';
import {
  useAgent,
  useCredentialById,
  useProofById,
} from '@aries-framework/react-hooks';
import React, {useState, useEffect} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProofRequestDeclined from '../assets/img/proof-declined.svg';
import InfoBox, {InfoBoxType} from '../components/ui/InfoBox';
import CredentialDeclined from '../assets/img/credential-declined.svg';
import {DeclineType} from './types/decline';
import CustomButton from './ui/Button';

const CommonDecline = ({navigation, route}) => {
  if (!route?.params) {
    throw new Error('CommonDecline route prams were not set properly');
  }

  const {declineType, itemId} = route.params;

  if (!itemId) {
    throw new Error('itemId cannot be undefined');
  }

  if (!declineType) {
    throw new Error('declineType cannot be undefined');
  }

  const {agent} = useAgent();
  const credential = useCredentialById(itemId);
  const proof = useProofById(itemId);

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

  if (
    (declineType === DeclineType.ProofRequest && credential) ||
    (declineType === DeclineType.CredentialOffer && proof)
  ) {
    throw new Error('Usage type and artifact do not match');
  }

  const onDoneTouched = () => {
    navigation.getParent()?.navigate('Dashboard');
  };

  const confirmDeclineTouched = async () => {
    try {
      if (agent && credential) {
        await agent.credentials.declineOffer(credential.id);
        return;
      }

      if (agent && proof) {
        await agent.proofs.declineRequest(proof.id);
        return;
      }
    } catch (err: unknown) {}
  };

  useEffect(() => {
    if (credential) {
      navigation.setOptions({title: 'CredentialOffer.DeclineTitle'});
    }

    if (credential && credential.state === CredentialState.Declined) {
      navigation.setOptions({headerShown: false});
      setDidDecline(true);
    }
  }, [credential]);

  useEffect(() => {
    if (proof) {
      navigation.setOptions({title: 'ProofRequest.DeclineTitle'});
    }

    if (proof && proof.state === ProofState.Declined) {
      navigation.setOptions({headerShown: false});
      setDidDecline(true);
    }
  }, [proof]);

  return (
    <SafeAreaView style={[styles.container]}>
      {didDecline && <StatusBar hidden={true} />}
      <View style={[{marginTop: 60}]}>
        {!didDecline && (
          <>
            <InfoBox
              notificationType={InfoBoxType.Warn}
              title={
                declineType === DeclineType.ProofRequest
                  ? 'Are you sure you want to decline this proof request?'
                  : 'Are you sure you want to decline this credential?'
              }
              description={
                declineType === DeclineType.ProofRequest
                  ? 'In order to receive the proof request again, the requestor will need to resend it.'
                  : 'In order to receive the credential offer again, you will need to reapply with the issuer.'
              }
            />

            <View style={{marginVertical: 45}}>
              <CustomButton
                text={
                  declineType === DeclineType.ProofRequest
                    ? 'Yes, decline this proof request'
                    : 'Yes, decline this credential'
                }
                submit={confirmDeclineTouched}
              />
              <View style={[{marginTop: 20}]}>
                <CustomButton
                  text={
                    declineType === DeclineType.ProofRequest
                      ? 'No, go back'
                      : 'No, go back'
                  }
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
              {declineType === DeclineType.ProofRequest ? (
                <View>
                  <Text style={styles.messageText}>
                    {declineType === DeclineType.ProofRequest
                      ? 'Proof Request Declined'
                      : 'Credential Offer Declined'}
                  </Text>
                  <ProofRequestDeclined
                    style={[styles.image]}
                    {...imageDisplayOptions}
                  />

                  <View style={{marginTop: 0}}>
                    <CustomButton
                      text={
                        declineType === DeclineType.ProofRequest
                          ? 'Done'
                          : 'Done'
                      }
                      submit={() => {
                        onDoneTouched();
                      }}
                    />
                  </View>
                </View>
              ) : (
                <View>
                  <Text style={styles.messageText}>
                    {declineType === DeclineType.ProofRequest
                      ? 'Proof Request Declined'
                      : 'Credential Offer Declined'}
                  </Text>
                  <CredentialDeclined
                    style={[styles.image]}
                    {...imageDisplayOptions}
                  />

                  <View style={{marginTop: 10}}>
                    <CustomButton
                      text={
                        declineType === DeclineType.ProofRequest
                          ? 'Done'
                          : 'Done'
                      }
                      submit={() => {
                        onDoneTouched();
                      }}
                    />
                  </View>
                </View>
              )}
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default CommonDecline;
