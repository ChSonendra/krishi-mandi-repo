import { Alert } from 'react-native';
import ServerConstants from '../../utils/values/ServerConstant';
import ToastController from '../provider/ToastController';
export class ErrorUtils {
  constructor(error, title = "") {
    this.errorTitle = title;
    this.errorText = "Something went wrong.Please try again after sometime.";
    switch (error.responseCode) {
      case ServerConstants.Token_Expired:
        this.errorText = error.message;
        break;
      case ServerConstants.User_Exists:
        this.errorText = error.message;
        break;
      case ServerConstants.BAD_REQUEST:
        this.errorText = error.message;
        break;
      case ServerConstants.Unauthorized:
        this.errorText = error.message;
        break;
      default:
        this.errorText
        break;
    }

  }

  showAlert() {
    ToastController.showToastTop(this.errorText)
    // Alert.alert(
    //   this.errorTitle,
    //   this.errorText,
    //   [
    //     {
    //       text: 'Cancel',
    //       onPress: () => console.log('Cancel Pressed'),
    //       style: 'cancel',
    //     },
    //   ]
    // );
  }
}