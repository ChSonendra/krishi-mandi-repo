import React from 'react'
import { View, Text, useWindowDimensions, StyleSheet } from 'react-native'
// import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import { testIdWithKey } from '../../../utils/testable'

interface BaseToastProps {
  title?: string
  body?: string
  toastType: string
}

export enum ToastType {
  Success = 'success',
  Info = 'info',
  Warn = 'warn',
  Error = 'error',
}

const BaseToast: React.FC<BaseToastProps> = ({ title, body, toastType }) => {
 
  const { width } = useWindowDimensions()
  const iconSize = 24
  let iconName = ''
  let backgroundColor = ''
  let borderColor = ''
  let iconColor = ''
  let textColor = 'black'
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      flexDirection: 'row',
      marginTop: 25,
      borderWidth:2,
      borderRadius:4,
    },
    textContainer: {
      flexShrink: 1,
      marginVertical: 15,
      marginRight: 10,
    },
    icon: {
      marginTop: 15,
      marginHorizontal: 15,
    },
    title: {
      fontWeight: 'bold',
    },
    body: {
      marginTop: 10,
    },
  })
  switch (toastType) {
    case ToastType.Success:
      iconName = 'check-circle'
      backgroundColor = '#313132'
      borderColor = '#2E8540'
      iconColor = '#2E8540'
      textColor ='#FFFFFF'
      break

    case ToastType.Info:
      iconName = 'info'
      backgroundColor = '#313132'
      borderColor = '#0099FF'
      iconColor ='#0099FF'
      textColor = '#FFFFFF'
      break

    case ToastType.Warn:
      iconName = 'report-problem'
      backgroundColor = '#313132'
      borderColor = '#FCBA19'
      iconColor ='#FCBA19'
      textColor = '#FFFFFF'
      break

    case ToastType.Error:
      iconName = 'error'
      backgroundColor =  '#313132'
      borderColor =  '#D8292F'
      iconColor = '#D8292F'
      textColor = '#FFFFFF'
      break

    default:
      throw new Error('ToastType was not set correctly.')
  }

  return (
    <View style={[styles.container, { backgroundColor, borderColor, width: width - width * 0.1 }]}>
      <Icon style={[styles.icon]} name={iconName} color={iconColor} size={iconSize} />
      <View style={[styles.textContainer]}>
        <Text style={[styles.title, { color: textColor }]} >
          {title}
        </Text>
        <Text style={[ styles.body, { color: textColor }]} >
          {body}
        </Text>
      </View>
    </View>
  )
}

export default BaseToast
