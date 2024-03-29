import React, { useState } from 'react';
import { StyleSheet, View, LogBox, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
  
  {/* ADD LOGIN FUNCTIONS */}
  function emailInputHandler(mail) {
    setEmail(mail);
  }

  function passwordInputHandler(pass) {
    setPassword(pass);
  }

  function loginHandler() {
    if (validateEmail(email)) {
      authenticate();
    }
  }

  function validateEmail(mail) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    
    if (reg.test(mail) === true) {
      return mail
    } else {
      Alert.alert('Invalid email format')
    }
  };

  function authenticate() {
    if (email == 'Admin@gmail.com' && password == 'admin' || email == 'User@gmail.com' && password == 'user') {
      navigation.navigate('Home')
    } else {
      Alert.alert('Incorrect email or password, try again!')
    }

    setEmail('');
    setPassword('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.loginHeader}>
        <FontAwesomeIcon style={styles.loginIcon} icon={ faUser } />
        <Text style={styles.textHeader}>Login</Text>
      </View>
      <View style={styles.loginForm}>
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

        <TouchableOpacity style={styles.loginBtn} onPress={() => loginHandler()}>
          <Text style={styles.loginText}>Login</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.createBtn} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.createBtnText}>Register here!</Text>
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
  loginForm: {
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
    shadowColor: "#000000",
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.7,
    shadowRadius: 4,
  },
  loginBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    height: '15%',
    borderRadius: 50,
    elevation: 3,
    backgroundColor: '#415A77',
    shadowColor: "#000000",
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.7,
    shadowRadius: 4,
  },
  loginText: {
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
  loginHeader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginIcon: {
    color: '#fafafa',
    padding: 50,
    margin: 20,
  },
  createBtn: {
    paddingTop: 20,
    alignContent: 'center',
    alignItems: 'center',
  },
  createBtnText: {
    color: '#E0E1DD',
    fontSize: 18,
  }
});