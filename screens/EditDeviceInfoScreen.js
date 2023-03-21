import React, { useState } from 'react';
import { TextInput, TouchableOpacity, StyleSheet, Text, View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from '../components/Header';
import DropDownPicker from 'react-native-dropdown-picker';

export default function EditDeviceInfoScreen({ navigation, route }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState(null);
  const [dropdownItems, setDropdownItems] = useState([
    {label: 'Lamp', value: 'lamp'},
    {label: 'Camera', value: 'camera'},
    {label: 'Speaker', value: 'speaker'},
    {label: 'Plug', value: 'plug'},
    {label: 'Thermostat', value: 'thermostat'},
    {label: 'Refrigerator', value: 'refrigerator'},
    {label: 'Switch', value: 'switch'}
  ]);

  let dateInfo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  {/* ADD DEVICE INFO FUNCTIONS */}
  function janInputHandler(num) {
    dateInfo.splice(0, 1, parseInt(num));
  }

  function febInputHandler(num) {
    dateInfo.splice(1, 1, parseInt(num));
  }

  function marInputHandler(num) {
    dateInfo.splice(2, 1, parseInt(num));
  }

  function aprInputHandler(num) {
    dateInfo.splice(3, 1, parseInt(num));
  }

  function mayInputHandler(num) {
    dateInfo.splice(4, 1, parseInt(num));
  }

  function junInputHandler(num) {
    dateInfo.splice(5, 1, parseInt(num));
  }

  function julInputHandler(num) {
    dateInfo.splice(6, 1, parseInt(num));
  }

  function augInputHandler(num) {
    dateInfo.splice(7, 1, parseInt(num));
  }

  function septInputHandler(num) {
    dateInfo.splice(8, 1, parseInt(num));
  }

  function octInputHandler(num) {
    dateInfo.splice(9, 1, parseInt(num));
  }

  function novInputHandler(num) {
    dateInfo.splice(10, 1, parseInt(num));
  }

  function decInputHandler(num) {
    dateInfo.splice(11, 1, parseInt(num));
  }

  function submitChanges() {
    if (dropdownValue == null) {
      Alert.alert('Please select a device type before pressing submit.');
      return;
    }

    route.params.onAdd(dateInfo, dropdownValue);

    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.modalContainer}>
        <View style={styles.modalForm}>
          <Text style={styles.modalTextTitle}>Consumption:</Text>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.months}>
              <View>
                <Text style={styles.modalText}>January</Text>
                <TextInput style={styles.modalTextInput} keyboardType='numeric' defaultValue='0' onChangeText={(text) => janInputHandler(text)}></TextInput>
              </View>
              <View>
                <Text style={styles.modalText}>February</Text>
                <TextInput style={styles.modalTextInput} keyboardType='numeric' defaultValue='0' onChangeText={(text) => febInputHandler(text)}></TextInput>
              </View>
              <View>
                <Text style={styles.modalText}>March</Text>
                <TextInput style={styles.modalTextInput} keyboardType='numeric' defaultValue='0' onChangeText={(text) => marInputHandler(text)}></TextInput>
              </View>
              <View>
                <Text style={styles.modalText}>April</Text>
                <TextInput style={styles.modalTextInput} keyboardType='numeric' defaultValue='0' onChangeText={(text) => aprInputHandler(text)}></TextInput>
              </View>
              <View>
                <Text style={styles.modalText}>May</Text>
                <TextInput style={styles.modalTextInput} keyboardType='numeric' defaultValue='0' onChangeText={(text) => mayInputHandler(text)}></TextInput>
              </View>
              <View>
                <Text style={styles.modalText}>June</Text>
                <TextInput style={styles.modalTextInput} keyboardType='numeric' defaultValue='0' onChangeText={(text) => junInputHandler(text)}></TextInput>
              </View>
              <View>
                <Text style={styles.modalText}>July</Text>
                <TextInput style={styles.modalTextInput} keyboardType='numeric' defaultValue='0' onChangeText={(text) => julInputHandler(text)}></TextInput>
              </View>
              <View>
                <Text style={styles.modalText}>August</Text>
                <TextInput style={styles.modalTextInput} keyboardType='numeric' defaultValue='0' onChangeText={(text) => augInputHandler(text)}></TextInput>
              </View>
              <View>
                <Text style={styles.modalText}>September</Text>
                <TextInput style={styles.modalTextInput} keyboardType='numeric' defaultValue='0' onChangeText={(text) => septInputHandler(text)}></TextInput>
              </View>
              <View>
                <Text style={styles.modalText}>October</Text>
                <TextInput style={styles.modalTextInput} keyboardType='numeric' defaultValue='0' onChangeText={(text) => octInputHandler(text)}></TextInput>
              </View>
              <View>
                <Text style={styles.modalText}>November</Text>
                <TextInput style={styles.modalTextInput} keyboardType='numeric' defaultValue='0' onChangeText={(text) => novInputHandler(text)}></TextInput>
              </View>
              <View>
                <Text style={styles.modalText}>December</Text>
                <TextInput style={styles.modalTextInput} keyboardType='numeric' defaultValue='0' onChangeText={(text) => decInputHandler(text)}></TextInput>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.dropdownContainer}>
            <Text style={styles.dropdownText}>Type of device:</Text>
            <DropDownPicker
              open={dropdownOpen}
              value={dropdownValue}
              items={dropdownItems}
              setOpen={setDropdownOpen}
              setValue={setDropdownValue}
              setItems={setDropdownItems}
              style={styles.dropdown}
            />
          </View>
        </View>
        
        {/* BUTTONS */}
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
            <Text style={styles.btnText}>Go Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={submitChanges}>
            <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>
        </View>
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
  modalButtons: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdown: {
    marginVertical: 15,
    width: '62%',
  },
  dropdownText: {
    marginHorizontal: 16,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#E0E1DD',
  },
  modalForm: {
    flex: 5,
    marginVertical: 20,
  },
  months: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
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
  buttons: {
    flexDirection: 'row',
    top: 15,
    maxHeight: 165,
    shadowColor: "#000000",
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.7,
    shadowRadius: 4,
  },
  modalText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    marginLeft: 20,
    marginVertical: 10,
  },
  modalTextTitle: {
    fontSize: 24,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    marginLeft: 20,
    marginVertical: 10,
    padding: 5,
  },
  modalTextInput: {
    textAlignVertical: 'top',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    marginHorizontal: 20,
    marginBottom: 30,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 25,
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#fafafa',
    shadowColor: "#000000",
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.7,
    shadowRadius: 4,
  },
});