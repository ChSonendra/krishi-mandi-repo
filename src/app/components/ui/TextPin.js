import React from 'react'
import { TextInput } from 'react-native-paper';
function TextPin(props) {
    return (
        <TextInput
            mode={props.mode}
            secureTextEntry={props.secure}
            placeholder={props.placeholder}
            value={props.value}
            onChangeText={props.onChange}
            right={props.right}
            keyboardType='numeric'
            theme={{ roundness: 100 }}
            style={{ backfaceVisibility: 'hidden',color:'#023047', backgroundColor: 'rgba(0, 0, 0, 0)',width:'100%' }}
        />
    )
}

export default TextPin