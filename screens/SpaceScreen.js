import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, FlatList, LogBox } from 'react-native';
import Header from '../components/Header';
import Device from '../components/Device';

export default function HouseScreen({ navigation, route }) {
  const [deviceContainer, setDeviceContainer] = React.useState([]);

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

  function addDevice(name, info) {
    if (name.length == 0 || info == {}) {
      Alert.alert('Please enter your device information before pressing submit.')
      return;
    }

    let id = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

    setDeviceContainer((currentDeviceContainer) => [...currentDeviceContainer, {id, name, info}]);
  }

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <Header username={route.params.username}/>

      {/* HOUSE INFO */}
      <View style={styles.spaceHeader}>
        <Text style={styles.spaceTitle}>{route.params?.spaceName}</Text>
        <Text style={styles.spaceDesc}>{route.params?.spaceDesc}</Text>
        <View style={styles.linebreak}/>
      </View>

      {/* LIST OF ALL DEVICES */}
      <FlatList style={styles.deviceContainer} data={deviceContainer} renderItem={(device) => {
        return <TouchableOpacity onPress={() => navigation.navigate('Device', {deviceId: device.item.id, deviceName: device.item.name, deviceInfo: device.item.info, username: route.params.username})}>
                  <Device key={device.item.id} name={device.item.name} info={device.item.info}/>
                </TouchableOpacity>
      }} alwaysBounceVertical={false} keyExtractor={(item, index) => {
        return item.id
      }}/>
        
      {/* BUTTONS */}
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
          <Text style={styles.btnText}>Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('AddDeviceScreen', {onAdd: addDevice, username: route.params.username})}>
          <Text style={styles.btnText}>Add Device</Text>
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
  deviceContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#E0E1DD',
  },
  spaceHeader: {
    flex: 1,
    maxHeight: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spaceTitle: {
    flex: 1,
    fontSize: 34,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    textAlign: 'center',
    marginTop: 8,
  },
  spaceDesc: {
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