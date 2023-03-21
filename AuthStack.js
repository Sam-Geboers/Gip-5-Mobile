import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} options={{animation: 'simple_push'}} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{animation: 'fade'}} />
    </Stack.Navigator>
  )
}