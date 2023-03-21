import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import HouseScreen from './screens/HouseScreen';
import SpaceScreen from './screens/SpaceScreen';
import DeviceScreen from './screens/DeviceScreen';
import AddHouseScreen from "./screens/AddHouseScreen";
import AddSpaceScreen from './screens/AddSpaceScreen';
import AddDeviceScreen from "./screens/AddDeviceScreen";
import EditDeviceInfoScreen from './screens/EditDeviceInfoScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} options={{animation: 'simple_push'}} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{animation: 'fade'}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{animation: 'fade'}} />
        <Stack.Screen name="House" component={HouseScreen} options={{animation: 'fade'}} />
        <Stack.Screen name="Space" component={SpaceScreen} options={{animation: 'fade'}} />
        <Stack.Screen name="Device" component={DeviceScreen} options={{animation: 'fade'}} />
        <Stack.Screen name="AddHouseScreen" component={AddHouseScreen} options={{animation: 'fade'}} />
        <Stack.Screen name="AddSpaceScreen" component={AddSpaceScreen} options={{animation: 'fade'}} />
        <Stack.Screen name="AddDeviceScreen" component={AddDeviceScreen} options={{animation: 'fade'}} />
        <Stack.Screen name="EditDeviceInfoScreen" component={EditDeviceInfoScreen} options={{animation: 'fade'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
