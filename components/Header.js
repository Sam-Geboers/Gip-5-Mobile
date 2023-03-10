import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export default function Header( props ) {
  const navigation = useNavigation();

  function logout() {
    navigation.navigate('Login');
  }

  return (
    <View style={styles.header}>
      <Text style={styles.user}>Welcome back, {props.username}!</Text>
      <TouchableOpacity onPress={() => logout()}>
        <FontAwesomeIcon style={styles.icon} icon={ faArrowRightFromBracket } />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#0D1B2A',
    minWidth: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 10,
  },
  user: {
    color: '#fafafa',
    fontSize: 21,
    fontWeight: 'bold',
    margin: 20,
  },
  icon: {
    color: '#fafafa',
    margin: 20,
    padding: 12,
  },
})