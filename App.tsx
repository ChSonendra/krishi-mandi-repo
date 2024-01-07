/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { PaperProvider,DefaultTheme} from 'react-native-paper';
import { PersistGate } from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {persistor, store} from './src/app/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {ActionSheetProvider} from '@expo/react-native-action-sheet';
import AppNavigator from './src/app/navigation/navigator';
import DrawerNavigator from './src/app/navigation/drawerNavigator';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
    },
  };
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    {/* <NavigationContainer> */}
              <AppNavigator/>
  {/* </NavigationContainer>r */}
  </PersistGate>
   </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
