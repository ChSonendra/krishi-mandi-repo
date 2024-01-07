import React, { useState, useRef,useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Platform ,PERMISSIONS,Image} from 'react-native';
import { RNCamera } from 'react-native-camera';
const PhotoClicker = () => {
  const cameraRef = useRef(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      const result = await request(PERMISSIONS.ANDROID.CAMERA);
      if (result === 'granted') {
        console.log('Camera permission granted');
      } else {
        console.log('Camera permission denied');
      }
    } else if (Platform.OS === 'ios') {
      const result = await request(PERMISSIONS.IOS.CAMERA);
      if (result === 'granted') {
        console.log('Camera permission granted');
      } else {
        console.log('Camera permission denied');
      }
    }
  };
  useEffect(() => {
    requestCameraPermission();
  }, []);
  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      setCapturedPhoto(data.uri);
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
      />
      
      {capturedPhoto && (
        <View style={styles.previewContainer}>
          <Text style={styles.previewText}>Photo</Text>
          <View style={styles.previewImageContainer}>
            <Image source={{ uri: capturedPhoto }} style={styles.previewImage} />
          </View>
        </View>
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={takePicture} style={styles.captureButton}>
          <Text style={styles.captureButtonText}>Add product</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  captureButton: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
  },
  captureButtonText: {
    fontSize: 16,
    color: '#333',
  },
  previewContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  previewText: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 10,
  },
  previewImageContainer: {
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 5,
    overflow: 'hidden',
  },
  previewImage: {
    width: 200,
    height: 200,
  },
});

export default PhotoClicker;
