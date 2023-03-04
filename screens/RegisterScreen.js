import { Pressable, StyleSheet, Text, View, LogBox } from 'react-native';

export default function RegisterScreen({ navigation }) {

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
    backgroundColor: '#E0E1DD',
    margin: 0,
    padding: 0,
  },
});