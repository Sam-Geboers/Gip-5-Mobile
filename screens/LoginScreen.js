import { Pressable, StyleSheet, Text, View, LogBox } from 'react-native';

export default function LoginScreen({ navigation }) {

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
  
  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1B2A',
    margin: 0,
    padding: 0,
  },
});