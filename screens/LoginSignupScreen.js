import React from 'react';
import { StyleSheet, View, LogBox, TextInput, TouchableOpacity, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


export default function LoginSignupScreen({ navigation }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
  
  {/* ADD LOGIN/SIGNUP FUNCTIONS */}
  function emailInputHandler(mail) {
    setEmail(mail);
  }

  function passwordInputHandler(pass) {
    setPassword(pass);
  }

  function Authenticate() {
    if (email == 'Admin' && password == 'admin') {
      navigation.navigate('Home', {username: email})
    }
    setEmail('');
    setPassword('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.loginHeader}>
        <FontAwesomeIcon style={styles.loginIcon} icon={ faUser } />
        <Text style={styles.textHeader}>Login & Signup</Text>
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

        <TouchableOpacity style={styles.loginBtn} onPress={() => Authenticate()}>
          <Text style={styles.loginText}>Login</Text> 
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
    marginVertical: 100,
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
    padding: 16,
    backgroundColor: '#fafafa',
    borderRadius: 25,
  },
  loginBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    height: '15%',
    borderRadius: 50,
    elevation: 3,
    backgroundColor: '#415A77',
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
});