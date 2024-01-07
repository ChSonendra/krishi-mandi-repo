import React from 'react';
import {View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
function Textinput(props) {
  return (
    <View>
      <TextInput
        mode="outlined"
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChange}
        theme={{roundness: 300}}
        outlineColor={'#023047'}
        style={{
          backfaceVisibility: 'hidden',
          backgroundColor: 'rgba(0, 0, 0, 0)',
        }}
        autoCapitalize={'none'}
      />
    </View>
  );
}

export default Textinput;
