import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../components/Header';
import House from '../components/House';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style='light' />

      <Header username='Dylan'/>

      <View style={styles.housesContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('House')}>
          <House style={styles.house} name='House 1'/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('House')}>
          <House style={styles.house} name='House 2'/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('House')}>
          <House style={styles.house} name='House 3'/>
        </TouchableOpacity>
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
