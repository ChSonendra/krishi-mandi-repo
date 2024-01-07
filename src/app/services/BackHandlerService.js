import { BackHandler, DeviceEventEmitter } from 'react-native';
import React, { Component } from 'react';


export default class BackHandlerService extends Component {

  constructor(props) {
    super(props);
  }
  componentWillUnmount = () => {
    DeviceEventEmitter.removeAllListeners('hardwareBackPress')
  
  }
  componentDidMount() {

  }

  /** 
   * add listener to handle device back button 
   * @param navigation param hold navigation prop information
   */

  AddbackHandler() {
    const { navigation, activeRoute } = this.props;
    DeviceEventEmitter.removeAllListeners('hardwareBackPress')
    DeviceEventEmitter.addListener('hardwareBackPress', () => {
      console.log(activeRoute)
      if (activeRoute && navigation) {
        if (activeRoute === "Splash" || activeRoute === "Login"||activeRoute==="Verification") {
          BackHandler.exitApp()
        } else if (activeRoute === "Dashboard" && navigation.isFocused()
          || activeRoute === "Home" &&navigation.isFocused()) {
            BackHandler.exitApp()
        } else if (activeRoute === "Navigator"  && navigation.isFocused()|| activeRoute === "Contacts" && navigation.isFocused()||activeRoute==='Scanner' && navigation.isFocused()) {
          // navigation.navigate('Dashboard');
          navigation.goBack();
          // DeviceEventEmitter.removeAllListeners('hardwareBackPress')
      }
        else {
          navigation.goBack();
          // DeviceEventEmitter.removeAllListeners('hardwareBackPress')
        }
      }
    })
  }
  /** 
   * remove listener to handle device back button 
   */

  removebackHandler() {
    DeviceEventEmitter.removeAllListeners('hardwareBackPress')
  }

  /**
   * Method to call a confirm alert to exit the application.
   */

  async handleExit() {
    BackHandler.exitApp()
  }


  /** 
    * Method to navigate back screen
    */

  async goBack() {
    const { navigation } = this.props;
    let alertValue = await AlertController.confirmAlert(I18n.t('exit'), I18n.t('exit_text'));
    if (alertValue) {
      navigation.goBack();
    }
  }

  render() {

    this.AddbackHandler()

    return (
      <>
      </>
    );
  }

}


