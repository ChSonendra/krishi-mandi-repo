import {ToastAndroid} from 'react-native';

export default ToastController = {
  /** Method to show toast on bottom
   * @param title of the toast
   */

  showToastBottom(title) {
    ToastAndroid.showWithGravity(
      title.toString(),
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  },

  /** Method to show toast on top
   * @param title of the toast
   */

  showToastTop(title) {
    ToastAndroid.showWithGravity(
      title.toString(),
      ToastAndroid.LONG,
      ToastAndroid.TOP,
    );
  },

  /** Method to show toast on bottom with offset
   * @param title of the toast
   */

  showToastWithGravityAndOffset(title) {
    ToastAndroid.showWithGravityAndOffset(
      title.toString(),
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  },
};
