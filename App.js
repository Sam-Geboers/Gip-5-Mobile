import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import screens
import HomeScreen from './screens/HomeScreen';
import HouseScreen from './screens/HouseScreen';
import SpaceScreen from './screens/SpaceScreen';
import DeviceScreen from './screens/DeviceScreen';
import AddHouseScreen from "./screens/AddHouseScreen";
import AddSpaceScreen from './screens/AddSpaceScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false, animation: 'simple_push'}} />
        <Stack.Screen name="House" component={HouseScreen} options={{headerShown: false, animation: 'simple_push'}} />
        <Stack.Screen name="Space" component={SpaceScreen} options={{headerShown: false, animation: 'simple_push'}} />
        <Stack.Screen name="Device" component={DeviceScreen} options={{headerShown: false, animation: 'simple_push'}} />
        <Stack.Screen name="AddHouseScreen" component={AddHouseScreen} options={{headerShown: false, animation: 'simple_push'}} />
        <Stack.Screen name="AddSpaceScreen" component={AddSpaceScreen} options={{headerShown: false, animation: 'simple_push'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
