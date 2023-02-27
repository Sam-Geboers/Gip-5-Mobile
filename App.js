import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import House from './components/House';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='light' />

      <Header styles={styles.header} />

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
    flex: 1,
    backgroundColor: '#fafafa',
    margin: 0,
    padding: 0,
  },
  housesContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    backgroundColor: '#fafafa',
  },
});
