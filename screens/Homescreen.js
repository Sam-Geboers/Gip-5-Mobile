import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Alert, LogBox } from 'react-native';
import Header from '../components/Header';
import House from '../components/House';

export default function HomeScreen({ navigation, route }) {
  const [houseContainer, setHouseContainer] = React.useState([]);

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

  function addHouse(name, adr) {
    if (name.length == 0 || adr.length == 0) {
      Alert.alert('Please enter your house information before pressing submit.')
      return;
    }

    let id = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

    setHouseContainer((currentHouseContainer) => [...currentHouseContainer, {id, name, adr}]);
  }

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <StatusBar style='light' />
      <Header />

      {/* TEMPLATE HOUSES */}
      <TouchableOpacity onPress={() => navigation.navigate('House', {houseId: 0, houseName: 'House 1', houseAdr: 'Leuven'})}>
        <House key={0} name='House 1' adr='Leuven'/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('House', {houseId: 1, houseName: 'House 2', houseAdr: 'Mechelen'})}>
        <House key={1} name='House 2' adr='Mechelen'/>
      </TouchableOpacity>

      {/* LIST OF ALL HOUSES */}
      <FlatList style={styles.housesContainer} data={houseContainer} renderItem={(house) => {
        return <TouchableOpacity onPress={() => navigation.navigate('House', {houseId: house.item.id, houseName: house.item.name, houseAdr: house.item.adr})}>
                 <House key={house.item.id} name={house.item.name} adr={house.item.adr}/>
               </TouchableOpacity>
      }} alwaysBounceVertical={false} keyExtractor={(item, index) => {
        return item.id
      }}/>

      {/* ADD HOUSE */}
      <TouchableOpacity style={styles.addHouseBtn} onPress={() => navigation.navigate('AddHouseScreen', {onAdd: addHouse})}>
        <Text style={styles.addHouseBtnText}>Add House</Text>
      </TouchableOpacity>
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
    shadowColor: "#000000",
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.7,
    shadowRadius: 4,
  },
  addHouseBtnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
