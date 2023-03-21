import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthStack } from './AuthStack';
import { AppStack } from './AppStack';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const storeData = async (isLoggedIn) => {
    try {
      await AsyncStorage.setItem('@userData', isLoggedIn)
    } catch (e) {
      console.log('Error while storing data to local storage:', e);
    }
  }

  return (
    <NavigationContainer>
      { isLoggedIn == true ? <AppStack /> : <AuthStack /> }
    </NavigationContainer>
  );
}
