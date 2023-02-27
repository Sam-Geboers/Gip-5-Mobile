import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import screens
import HomeScreen from './screens/HomeScreen';
import HouseScreen from './screens/HouseScreen';
import RoomScreen from './screens/RoomScreen';
import DeviceScreen from './screens/DeviceScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false, animation: 'simple_push'}} />
        <Stack.Screen name="House" component={HouseScreen} options={{headerShown: false, animation: 'simple_push'}} />
        <Stack.Screen name="Room" component={RoomScreen} options={{headerShown: false, animation: 'simple_push'}} />
        <Stack.Screen name="Device" component={DeviceScreen} options={{headerShown: false, animation: 'simple_push'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
