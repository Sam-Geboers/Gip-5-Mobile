import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import screens
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from './screens/HomeScreen';
import HouseScreen from './screens/HouseScreen';
import SpaceScreen from './screens/SpaceScreen';
import DeviceScreen from './screens/DeviceScreen';
import AddHouseScreen from "./screens/AddHouseScreen";
import AddSpaceScreen from './screens/AddSpaceScreen';
import AddDeviceScreen from "./screens/AddDeviceScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false, animation: 'simple_push'}} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false, animation: 'fade'}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false, animation: 'fade'}} />
        <Stack.Screen name="House" component={HouseScreen} options={{headerShown: false, animation: 'fade'}} />
        <Stack.Screen name="Space" component={SpaceScreen} options={{headerShown: false, animation: 'fade'}} />
        <Stack.Screen name="Device" component={DeviceScreen} options={{headerShown: false, animation: 'fade'}} />
        <Stack.Screen name="AddHouseScreen" component={AddHouseScreen} options={{headerShown: false, animation: 'fade'}} />
        <Stack.Screen name="AddSpaceScreen" component={AddSpaceScreen} options={{headerShown: false, animation: 'fade'}} />
        <Stack.Screen name="AddDeviceScreen" component={AddDeviceScreen} options={{headerShown: false, animation: 'fade'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
