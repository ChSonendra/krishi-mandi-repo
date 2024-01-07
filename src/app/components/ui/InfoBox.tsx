import React, {useState} from 'react';
// import { useTranslation } from 'react-i18next'
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../Button';

// import { useTheme } from '../../contexts/theme'
// import { GenericFn } from '../../types/fn'
// import { testIdWithKey } from '../../utils/testable'
// import Button, { ButtonType } from '../buttons/Button'

const iconSize = 32;
const {width} = Dimensions.get('window');

export enum InfoBoxType {
  Info,
  Success,
  Warn,
  Error,
}

interface BifoldErrorProps {
  notificationType: InfoBoxType;
  title: string;
  description: string;
  message?: string;
  msg?: string;

  onCallToActionLabel?: string;
}

const InfoBox: React.FC<BifoldErrorProps> = ({
  notificationType,
  title,
  description,
  message,
}) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      borderColor: 'lightblue',
      borderRadius: 5,
      borderWidth: 1,
      padding: 10,
      minWidth: width - 2 * 25,
    },
    headerContainer: {
      flexDirection: 'row',
      paddingHorizontal: 5,
      paddingTop: 5,
    },
    bodyContainer: {
      flexDirection: 'column',
      marginLeft: 10 + iconSize,
      paddingHorizontal: 5,
      paddingBottom: 5,
    },
    headerText: {
      fontSize: 16,
      flexShrink: 1,
      fontWeight: 'bold',
      alignSelf: 'center',
      color: 'black',
    },
    bodyText: {
      flexShrink: 1,
      marginVertical: 16,
      color: 'black',
    },
    icon: {
      marginRight: 10,
      alignSelf: 'center',
    },
    showDetailsText: {
      fontWeight: 'normal',
    },
  });
  let iconName = 'info';
  let iconColor = '#219ebc';

  switch (notificationType) {
    case InfoBoxType.Info:
      iconName = 'info';
      iconColor = 'white';
      styles.container = {
        ...styles.container,
        backgroundColor: '#F86E51',
        borderColor: 'red',
      };
      styles.headerText = {
        ...styles.headerText,
        color: 'white',
      };
      styles.bodyText = {
        ...styles.bodyText,
        color: 'white',
      };
      break;

    case InfoBoxType.Success:
      iconName = 'check-circle';
      iconColor = '#219ebc';
      styles.container = {
        ...styles.container,
        backgroundColor: '#023047',
        borderColor: '#219ebc',
      };
      styles.headerText = {
        ...styles.headerText,
      };
      styles.bodyText = {
        ...styles.bodyText,
      };
      break;

    case InfoBoxType.Warn:
      iconName = 'warning';
      iconColor = '#023047';
      styles.container = {
        ...styles.container,
        backgroundColor: 'lightblue',
        borderColor: '#023047',
      };
      styles.headerText = {
        ...styles.headerText,
        color: 'black',
      };
      styles.bodyText = {
        ...styles.bodyText,
        color: 'black',
      };
      break;

    case InfoBoxType.Error:
      iconName = 'error';
      iconColor = 'red';
      styles.container = {
        ...styles.container,
        backgroundColor: '#219ebc',
        borderColor: '#219ebc',
      };
      styles.headerText = {
        ...styles.headerText,
      };
      styles.bodyText = {
        ...styles.bodyText,
      };
      break;

    default:
      throw new Error('InfoTextBoxType needs to be set correctly');
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={[styles.icon]}>
          <Icon name={iconName} size={iconSize} color={iconColor} />
        </View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.bodyText}>
          {showDetails ? message : description}
        </Text>
      </View>
    </View>
  );
};

export default InfoBox;
