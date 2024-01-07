import React, {useState} from 'react';
import {StatusBar, View} from 'react-native';

const StatBar = props => {
  const STYLES = ['default', 'dark-content', 'light-content'];
  const [statusBarStyle] = useState(STYLES[0]);

  return (
    <View>
      <StatusBar
        animated={true}
        backgroundColor={props.color ? props.color : '#023047'}
        barStyle={statusBarStyle}
        hidden={props.hide ? props.hide : false}
      />
    </View>
  );
};

export default StatBar;
