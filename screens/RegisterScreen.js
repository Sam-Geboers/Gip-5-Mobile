import React from 'react';
import { StyleSheet, View, LogBox, TextInput, TouchableOpacity, Text } from 'react-native';
import CheckBox from 'expo-checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import APIService from '../APIService';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isRoleUser, setRoleUser] = React.useState(false);
  const [isRoleAdmin, setRoleAdmin] = React.useState(false);

  const storeData = async (data) => {
    try {
      const jsonData = JSON.stringify(data)
      await AsyncStorage.setItem('@userData', jsonData)
    } catch (e) {
      console.log('Error while storing data to local storage:', e);
    }
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@userData')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      console.log('Error while retrieving data from local storage:', e);
    }
  }

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
  
  {/* ADD REGISTER FUNCTIONS */}
  function usernameInputHandler(user) {
    setUsername(user);
  }

  function emailInputHandler(mail) {
    setEmail(mail);
  }

  function passwordInputHandler(pass) {
    setPassword(pass);
  }
  
  function Register() {
    let role = 'ADMIN'

    if (isRoleUser) {
      role = 'USER'
    }

    APIService.addUser(username, email, password, role)
    .catch(err => {
      console.log('Error while adding user: ', err);
    })
    .finally(() => {
      let user = {
        uname: username,
        mail: email,
        rl: role
      }

      storeData(user);
      console.log(getData());

      navigation.navigate('Login')
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.registerHeader}>
        <FontAwesomeIcon style={styles.registerIcon} icon={ faUser } />
        <Text style={styles.textHeader}>Register</Text>
      </View>

      <View style={styles.registerForm}>
      <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Username"
            value={username}
            onChangeText={(username) => usernameInputHandler(username)}
          /> 
        </View> 

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            value={email}
            onChangeText={(email) => emailInputHandler(email)}
          /> 
        </View> 

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(password) => passwordInputHandler(password)}
          /> 
        </View>

        <View style={styles.checkboxView}>
          <View style={styles.checkboxPart}>
            <CheckBox
              value={isRoleUser}
              onValueChange={setRoleUser}
              style={styles.checkbox}
            />
            <Text style={styles.checkboxText}>User</Text>
          </View>
          
          <View style={styles.checkboxPart}>
            <CheckBox
              value={isRoleAdmin}
              onValueChange={setRoleAdmin}
              style={styles.checkbox}
            />
            <Text style={styles.checkboxText}>Admin</Text>
          </View>
        </View>
        
        <TouchableOpacity style={styles.btn1} onPress={() => Register()}>
          <Text style={styles.btnText}>Register</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2} onPress={() => navigation.goBack()}>
          <Text style={styles.btnText}>Go back</Text> 
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1B2A',
  },
  registerForm: {
    flex: 1,
    marginVertical: 60,
    marginHorizontal: 40,
    paddingBottom: 160,
  },
  inputView: {
    backgroundColor: "#fafafa",
    borderRadius: 30,
    height: 45,
    marginBottom: 20,
  },
  checkboxView: {
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  checkbox: {
    padding: 15,
    color: '#415A77',
  },
  checkboxText: {
    color: '#fafafa',
    fontSize: 24,
    marginLeft: 10,
  },
  checkboxPart: {
    flexDirection: 'row',
  },
  TextInput: {
    padding: 15,
    backgroundColor: '#fafafa',
    borderRadius: 25,
  },
  btn1: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    height: '18%',
    width: '100%',
    borderRadius: 50,
    elevation: 3,
    backgroundColor: '#415A77',
  },
  btn2: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    height: '18%',
    width: '100%',
    borderRadius: 50,
    elevation: 3,
    backgroundColor: '#415A77',
  },
  btnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#fafafa',
  },
  textHeader: {
    fontSize: 36,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#fafafa',
    paddingTop: 20,
  },
  registerHeader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerIcon: {
    color: '#fafafa',
    padding: 50,
    margin: 20,
  },
});