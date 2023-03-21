import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, FlatList, LogBox, Alert } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import Device from '../components/Device';

export default function SpaceScreen({ navigation, route }) {
  const [deviceContainer, setDeviceContainer] = React.useState([]);

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

  function addDevice(name, desc) {
    if (name.length == 0 || desc.length == 0) {
      Alert.alert('Please enter your  information before pressing submit.')
      return;
    }

    let id = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

    setDeviceContainer((currentDeviceContainer) => [...currentDeviceContainer, {id, name, desc}]);
  }

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <Header />

      {/* HOUSE INFO */}
      <View style={styles.spaceHeader}>
        <View style={styles.spaceData}>
          <FontAwesomeIcon icon={faCube} style={{marginHorizontal: 25, padding: 15}}/>
          <View>
            <Text style={styles.spaceTitle}>{route.params?.spaceName}</Text>
            <Text style={styles.spaceDesc}>{route.params?.spaceDesc}</Text>
          </View>
        </View>
        
        <View style={styles.linebreak}/>
      </View>

      {/* TEMPLATE DEVICE */}
      <TouchableOpacity onPress={() => navigation.navigate('Device', {deviceId: 0, deviceName: 'Philips Hue Light', deviceDesc: 'Smart light'})}>
        <Device key={0} name='Philips Hue Light' desc='Smart light'/>
      </TouchableOpacity>

      {/* LIST OF ALL DEVICES */}
      <FlatList style={styles.deviceContainer} data={deviceContainer} renderItem={(device) => {
        return <TouchableOpacity onPress={() => navigation.navigate('Device', {deviceId: device.item.id, deviceName: device.item.name, deviceDesc: device.item.desc})}>
                  <Device key={device.item.id} name={device.item.name} desc={device.item.desc}/>
                </TouchableOpacity>
      }} alwaysBounceVertical={false} keyExtractor={(item, index) => {
        return item.id
      }}/>
        
      {/* BUTTONS */}
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
          <Text style={styles.btnText}>Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('AddDeviceScreen', {onAdd: addDevice })}>
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
    alignItems: 'center',
  },
  spaceData: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  spaceTitle: {
    flex: 1,
    fontSize: 34,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  spaceDesc: {
    flex: 1,
    fontSize: 18,
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
    shadowColor: "#000000",
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.7,
    shadowRadius: 4,
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