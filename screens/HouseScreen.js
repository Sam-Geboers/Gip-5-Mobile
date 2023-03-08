import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, FlatList, LogBox } from 'react-native';
import Header from '../components/Header';
import Space from '../components/Space';

export default function HouseScreen({ navigation, route }) {
  const [spaceContainer, setSpaceContainer] = React.useState([]);

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

  function addSpace(name, desc) {
    if (name.length == 0 || desc.length == 0) {
      Alert.alert('Please enter your space information before pressing submit.')
      return;
    }

    let id = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

    setSpaceContainer((currentSpaceContainer) => [...currentSpaceContainer, {id, name, desc}]);
  }

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <Header username={route.params.username}/>

      {/* HOUSE INFO */}
      <View style={styles.houseHeader}>
        <Text style={styles.houseTitle}>{route.params?.houseName}</Text>
        <Text style={styles.houseAdr}>{route.params?.houseAdr}</Text>
        <View style={styles.linebreak}/>
      </View>

      {/* LIST OF ALL SPACES */}
      <FlatList style={styles.spaceContainer} data={spaceContainer} renderItem={(space) => {
        return <TouchableOpacity onPress={() => navigation.navigate('Space', {spaceId: space.item.id, spaceName: space.item.name, spaceDesc: space.item.desc, username: route.params.username})}>
                  <Space key={space.item.id} name={space.item.name} desc={space.item.desc}/>
                </TouchableOpacity>
      }} alwaysBounceVertical={false} keyExtractor={(item, index) => {
        return item.id
      }}/>
        
      {/* BUTTONS */}
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
          <Text style={styles.btnText}>Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('AddSpaceScreen', {onAdd: addSpace, username: route.params.username})}>
          <Text style={styles.btnText}>Add Space</Text>
        </TouchableOpacity>
      </View>
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
  spaceContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#E0E1DD',
  },
  houseHeader: {
    flex: 1,
    maxHeight: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  houseTitle: {
    flex: 1,
    fontSize: 34,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    textAlign: 'center',
    marginTop: 8,
  },
  houseAdr: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginBottom: 35,
    width: '40%',
    height: '50%',
    borderRadius: 50,
    elevation: 3,
    backgroundColor: '#415A77',
  },
  btnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  linebreak: {
    position: 'absolute',
    borderTopColor: '#1B263B',
    borderTopWidth: StyleSheet.hairlineWidth,
    width: '90%',
    top: 75,
  },
  buttons: {
    flexDirection: 'row',
    top: 15,
    maxHeight: 165,
  },
});