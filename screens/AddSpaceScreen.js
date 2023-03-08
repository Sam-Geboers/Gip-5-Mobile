import React from 'react';
import { TextInput, TouchableOpacity, StyleSheet, Text, View, Alert} from 'react-native';
import Header from '../components/Header';

export default function AddHouseScreen({ navigation, route }) {
  const [spaceName, setSpaceName] = React.useState('');
  const [spaceDesc, setSpaceDesc] = React.useState('');


  {/* ADD SPACE FUNCTIONS */}
  function spaceNameInputHandler(name) {
    setSpaceName(name);
  }

  function spaceDescInputHandler(desc) {
    setSpaceDesc(desc);
  }

  function addSpace() {
    route.params.onAdd(spaceName, spaceDesc);
    navigation.setOptions();
    setSpaceName('');
    setSpaceDesc('');

    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Header username={route.params.username}/>

      <View style={styles.modalContainer}>
        <View style={styles.modalForm}>
          <Text style={styles.modalText}>Space name:</Text>
          <TextInput style={styles.modalTextInput} placeholder='Space name...' onChangeText={(text) => spaceNameInputHandler(text)}></TextInput>

          <Text style={styles.modalText}>Description:</Text>
          <TextInput style={styles.modalTextInput} maxLength={40} placeholder='Description...' onChangeText={(text) => spaceDescInputHandler(text)}></TextInput>
        </View>

        <View style={styles.modalButtons}>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
            <Text style={styles.btnText}>Go Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={addSpace}>
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
  modal: {
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
    borderWidth: 2,
    borderColor: '#1B263B',
    backgroundColor: '#fafafa',
  },
});