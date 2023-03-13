import React from 'react';
import { StyleSheet, View, LogBox, TextInput, TouchableOpacity, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import APIService from '../APIService';

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

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
    APIService.addUser(username, email, password)
    .catch(err => {
      console.log('Error while adding user: ', err);
    })
    .finally(navigation.navigate('Login'))
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