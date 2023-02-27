import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import House from '../components/House';

export default function Homescreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style='light' />

      <Header />

      <View style={styles.housesContainer}>
        <House style={styles.house} onPress={() => navigation.navigate("house")} />
        <House style={styles.house} />
        <House style={styles.house} />
      </View>

      <Pressable style={styles.addHouseBtn}>
        <Text style={styles.addHouseBtnText}>Add House</Text>
      </Pressable>
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
  housesContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#E0E1DD',
  },
  addHouseBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 60,
    marginBottom: 30,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: '#415A77',
  },
  addHouseBtnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
