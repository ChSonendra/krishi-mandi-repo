import NetInfo from "@react-native-community/netinfo";
import ToastController from '../provider/ToastController';
export const checkConnected = async () => {
  const state = await NetInfo.fetch();
  console.log("Connection type", state.type);
  console.log("Is connected?", state.isConnected);
  ToastController.showToastTop(state.isConnected ? null : 'Please Check Your Internet Connection');
  return state.isConnected;
};