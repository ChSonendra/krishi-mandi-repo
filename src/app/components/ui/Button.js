import React from 'react'
import { Button } from 'react-native-paper';
function CustomButton(props) {
  return (
    <Button mode="contained" theme={{ roundness: 300 }} onPress={props.submit} 
 style={{  backgroundColor: props.color ? props.color : '#023047',}}
    >{props.text}</Button>
  )
}

export default CustomButton