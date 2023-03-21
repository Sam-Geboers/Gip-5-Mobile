import { useEffect, useState } from 'react';
import {TouchableOpacity, StyleSheet, Text, View, LogBox, Alert } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouseLaptop, faCircleCheck, faCircle } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import { Dimensions } from "react-native";
import { LineChart } from 'react-native-chart-kit';


export default function DeviceScreen({ navigation, route }) {
  const [isOnline, setIsOnline] = useState(true);
  const [deviceType, setDeviceType] = useState('');
  const [deviceInfo, setDeviceInfo] = useState([0, 45, 20, 40, 80, 65, 0, 0, 0, 0, 0, 0]);
  
  const screenWidth = (Dimensions.get("window").width - 40);
  const data = {
    labels: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    datasets: [
      {
        data: deviceInfo,
        color: (opacity = 1) => `rgba(119, 141, 169, ${opacity})`,
        strokeWidth: 4
      }
    ],
    legend: ["Consumption"]
  };

  const chartConfig = {
    backgroundGradientFrom: "#415A77",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#778DA9",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(224, 225, 221, ${opacity})`,
    strokeWidth: 3,
    barPercentage: 0.5,
    useShadowColorFromDataset: true
  };

  //data['datasets'][0].data.push(40)

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
  
  function submitDeviceInfo(info, type) {
    setDeviceInfo(info)
    setDeviceType(type);
  }

  function toggleIsOnline() {
    setIsOnline(!isOnline)
  }
  
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <Header />

      {/* HOUSE INFO */}
      <View style={styles.deviceHeader}>
        <View style={styles.deviceData}>
          <FontAwesomeIcon icon={faHouseLaptop} style={{marginHorizontal: 25, padding: 15}}/>
          <View>
            <Text style={styles.deviceTitle}>{route.params?.deviceName}</Text>
            <Text style={styles.deviceDesc}>{route.params?.deviceDesc}</Text>
          </View>
        </View>
        <View style={styles.linebreak}/>
      </View>

      {/* DEVICE INFO */}
      <View style={styles.deviceContainer}>
        { isOnline ? 
        <TouchableOpacity onPress={toggleIsOnline}>
          <View style={styles.deviceOnline}>
            <FontAwesomeIcon icon={faCircleCheck} style={styles.deviceOnlineIcon}/>
            <Text style={styles.deviceOnlineText}>Device is online</Text>
          </View>
        </TouchableOpacity>
        :
        <TouchableOpacity onPress={toggleIsOnline}>
          <View style={styles.deviceOnline}>
            <FontAwesomeIcon icon={faCircle} style={styles.deviceOnlineIcon}/>
            <Text style={styles.deviceOnlineText}>Device turned off</Text>
          </View>
        </TouchableOpacity>
        }

        <View style={styles.dropdownContainer}>
          <Text style={styles.dropdownText}>Type of device: {deviceType == null ?  deviceType : 'N/A'}</Text>
        </View>

        <View style={styles.graph}>
          <LineChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
          />
        </View>
      </View>
        
      {/* BUTTONS */}
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
          <Text style={styles.btnText}>Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('EditDeviceInfoScreen', {onAdd: submitDeviceInfo})}>
          <Text style={styles.btnText}>Edit Device</Text>
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
  dropdownContainer: {
    JustifyContent: 'center',
    alignItems: 'center',
    marginBottom: 45,
  },
  dropdownText: {
    marginHorizontal: 16,
    fontSize: 18,
  },
  deviceOnline: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'center',
  },
  deviceOnlineText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  deviceOnlineIcon: {
    padding: 16,
    marginRight: 16,
    color: '#415A77',
  },
  graph: {
    backgroundColor: '#0D1B2A',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
    borderRadius: '25',
    shadowColor: "#000000",
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.7,
    shadowRadius: 4,
  },
  deviceHeader: {
    flex: 1,
    maxHeight: 80,
    alignItems: 'center',
  },
  deviceData: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  deviceTitle: {
    flex: 1,
    fontSize: 34,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  deviceDesc: {
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
    shadowColor: "#000000",
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.7,
    shadowRadius: 4,
  },
});