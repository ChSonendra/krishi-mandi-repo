import React from 'react';
import FarmerScreen from '../screens/farmer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/homeScreen';
import CustomDrawerContent from '../screens/draweContent';
import { store } from '../redux/store';
import ProfileScreen from '../screens/profile';
import PhotoClicker from '../screens/photo';


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const state=store.getState()

const Stack = createStackNavigator();
const HomeTabs = () => (
  <Tab.Navigator>
  <Tab.Screen
    name="HomeScreen"
    component={HomeScreen}
    options={{
      tabBarIcon: ({ color, size }) => (
        <Icon name="home" color="green" size={size} />
      ),
           headerShown:false,
    }}
  />
      <Tab.Screen
    name="Account"
    component={ProfileScreen}
    options={{
      tabBarIcon: ({ color, size }) => (
        <Icon name="user" color="green" size={size} />
      ),
      headerShown:false,
    }}
  />
</Tab.Navigator>
);

const FarmerStack = () => (
<Drawer.Navigator
drawerContent={(props) => <CustomDrawerContent {...props} />} // Pass your custom drawer content component here
screenOptions={{
  headerShown: false,
}}
>
  <Drawer.Screen  name="FarmerScreen" component={FarmerScreen} />                 
  {/* <Drawer.Screen name="Cart" component={CartScreen} /> */}
  <Drawer.Screen  name="Photo" component={PhotoClicker}/>

    <Drawer.Screen name="Profile" component={ProfileScreen} />
  {/* <Drawer.Screen name="Address" component={AddAddressScreen} /> */}
  {/* <Drawer.Screen name="Settings" component={ProductListingPage} /> */}
  {/* <Drawer.Screen name="Product" component={ProductDetails} /> */}


  {/* Add more screens to Drawer Navigator as needed */}
</Drawer.Navigator>
);
// const FarmerStack = () => (
//   <Stack.Navigator initialRouteName="FarmerScreen" screenOptions={{ headerShown: false }}>
//     {/* <Stack.Screen name="Main" component={MainNavigator} /> */}

//     <Stack.Screen name="FarmerScreen" component={FarmerScreen} />
//     <Stack.Screen name="Photo" component={PhotoClicker} />

//     {/* ... add more screens as needed */}
//   </Stack.Navigator>
// );

export default FarmerStack;
