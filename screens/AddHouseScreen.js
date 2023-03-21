import React from 'react';
import { TextInput, TouchableOpacity, StyleSheet, Text, View, Alert} from 'react-native';
import Header from '../components/Header';

export default function AddHouseScreen({ navigation, route }) {
  const [houseName, setHouseName] = React.useState('');
  const [houseAdr, setHouseAdr] = React.useState('');


  {/* ADD HOUSE FUNCTIONS */}
  function houseNameInputHandler(name) {
    setHouseName(name);
  }

  function houseAdrInputHandler(adr) {
    setHouseAdr(adr);
  }

  function addHouse() {
    if (houseName.length == 0 || houseAdr.length == 0) {
      Alert.alert('Please enter your house information before pressing submit.')
      return;
    }

    route.params.onAdd(houseName, houseAdr);

    setHouseName('');
    setHouseAdr('');

    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.modalContainer}>
        <View style={styles.modalForm}>
          <Text style={styles.modalText}>House name:</Text>
          <TextInput style={styles.modalTextInput} placeholder='House name...' onChangeText={(text) => houseNameInputHandler(text)}></TextInput>

          <Text style={styles.modalText}>Adress:</Text>
          <TextInput style={styles.modalTextInput} maxLength={40} placeholder='Adress...' onChangeText={(text) => houseAdrInputHandler(text)}></TextInput>
        </View>

        <View style={styles.modalButtons}>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
            <Text style={styles.btnText}>Go Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={addHouse}>
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
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#E0E1DD',
  },
  modalForm: {
    flex: 2,
    marginVertical: 100,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginBottom: 35,
    width: '40%',
    height: '30%',
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
  modalText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    marginLeft: 20,
    marginVertical: 10,
  },
  modalTextInput: {
    textAlignVertical: 'top',
    alignItems: 'center',
    justifyContent: 'center',
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