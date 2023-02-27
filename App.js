import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import House from './components/House';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='light' />

      <Header />

      <View styles={styles.housesContainer}>
        <House style={styles.house} />
        <House style={styles.house} />
        <House style={styles.house} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  housesContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    backgroundColor: '#fafafa',
  },
  house: {
    flex: 1,
    aspectRatio: 1,
  }
});
