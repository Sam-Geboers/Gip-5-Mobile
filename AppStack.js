import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import HouseScreen from './screens/HouseScreen';
import SpaceScreen from './screens/SpaceScreen';
import DeviceScreen from './screens/DeviceScreen';
import AddHouseScreen from "./screens/AddHouseScreen";
import AddSpaceScreen from './screens/AddSpaceScreen';
import AddDeviceScreen from "./screens/AddDeviceScreen";

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} options={{animation: 'fade'}} />
      <Stack.Screen name="House" component={HouseScreen} options={{animation: 'fade'}} />
      <Stack.Screen name="Space" component={SpaceScreen} options={{animation: 'fade'}} />
      <Stack.Screen name="Device" component={DeviceScreen} options={{animation: 'fade'}} />
      <Stack.Screen name="AddHouseScreen" component={AddHouseScreen} options={{animation: 'fade'}} />
      <Stack.Screen name="AddSpaceScreen" component={AddSpaceScreen} options={{animation: 'fade'}} />
      <Stack.Screen name="AddDeviceScreen" component={AddDeviceScreen} options={{animation: 'fade'}} />
    </Stack.Navigator>
  )
}