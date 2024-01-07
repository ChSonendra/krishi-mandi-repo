import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'



export interface TextBoxProps {
  children: React.ReactElement | string
}

const iconSize = 25
const offset = 10

const InfoTextBox: React.FC<TextBoxProps> = ({ children }) => {

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'lightblue',
      borderRadius: 5,
      borderWidth: 1,
      borderColor:'#0099FF',
      padding: 8,
      alignSelf:'center',
      marginLeft:10
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    textContainer: {
      fontSize: 18,
      color: '#023047',
      fontWeight: 'bold',
      alignSelf: 'center',
      flexShrink: 1,
    },
    iconContainer: {
      marginRight: offset,
      alignSelf: 'center',
    },
    noNewUpdatesText: {
      fontSize: 18,
      fontWeight: 'normal',
      color: '#023047',
    },
  })
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Icon name={'info'} size={iconSize} color='#0099FF'/>
        </View>
        <Text style={styles.noNewUpdatesText}>
        You have no new notifications
      </Text>
      </View>
    </View>
  )
}

export default InfoTextBox
