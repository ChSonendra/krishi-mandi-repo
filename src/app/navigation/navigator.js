
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import SplashScreen from '../screens/splashScreen';
import LoginScreen from '../screens/login';
import HomeScreen from '../screens/homeScreen';
import MainScreen from '../screens/mainScreen';
import OTPScreen from '../screens/otpScreen';
import CategoryScreen from '../screens/category';
import AccountsScreen from '../screens/account';
import ProductListingPage from '../screens/products';
import CustomDrawerContent from '../screens/draweContent';
import CartScreen from '../screens/CartScreen';
import { store } from '../redux/store';
import EditProfileScreen from '../screens/editProfileScreen';
import ProfileScreen from '../screens/profile';
import AddAddressScreen from '../screens/addAddress';
import ProductDetails from '../screens/productDetails';
import FarmerStack from './drawerNavigator';
import OrderConfirmedScreen from '../screens/orders';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const state=store.getState()
console.log(state?.userData?.userData);
  const isLoggedIn = state?.userData?.userData?true:false; 
const AuthStack = () => (
  
      <Stack.Navigator initialRouteName="Splash"  screenOptions={{
        headerShown: false, 
      }}>
         <Stack.Screen name="Splash" component={SplashScreen} />
         <Stack.Screen name="Main" component={MainScreen} />
         <Stack.Screen name="Login" component={LoginScreen} />
         <Stack.Screen name="Otp" component={OTPScreen} />
         <Stack.Screen
        name="MainNavigator"
        component={MainNavigator}
      />
         <Stack.Screen
        name="FarmerScreen"
        component={FarmerStack}
      />

  </Stack.Navigator>
);

const HomeTabs = () => (
    <Stack.Navigator>
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" color="green" size={size} />
        ),
             headerShown:false,
      }}
    />
  
        <Stack.Screen
      name="Account"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="user" color="green" size={size} />
        ),
        headerShown:false,
      }}
    />
    {/* Add more tab screens as needed */}
  </Stack.Navigator>
);

const MainNavigator = () => (
  <Drawer.Navigator
  drawerContent={(props) => <CustomDrawerContent {...props} />} // Pass your custom drawer content component here
  screenOptions={{
    headerShown: false,
  }}
>
    <Drawer.Screen name="Home" component={HomeTabs} />
    <Drawer.Screen name="Cart" component={CartScreen} />
    <Drawer.Screen name="EditProfile" component={EditProfileScreen} />

      <Drawer.Screen name="Profile" component={ProfileScreen} />
    <Drawer.Screen name="Address" component={AddAddressScreen} />
    <Drawer.Screen name="Settings" component={ProductListingPage} />
    <Drawer.Screen name="Product" component={ProductDetails} />
    <Drawer.Screen name="Orders" component={OrderConfirmedScreen} />



    {/* Add more screens to Drawer Navigator as needed */}
  </Drawer.Navigator>
);

const AppNavigator = () => {
  const state = store.getState();

  // Set this based on your authentication logic
  const isLoggedIn = state?.userData?.userData ? true : false;
  const isFarmer = state?.Detail?.user === 'farmer' ? true : false;
  console.log(isFarmer);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        isFarmer ? (
          <FarmerStack />
        ) : (
          <MainNavigator />
        )
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};


export default AppNavigator;
