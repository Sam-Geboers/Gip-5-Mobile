import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { faGear } from '@fortawesome/free-solid-svg-icons';

export default function Header( props ) {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Text style={styles.user}>Welcome back, {props.username}!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <FontAwesomeIcon style={styles.ellipsis} icon={ faGear } />
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
  ellipsis: {
    color: '#fafafa',
    margin: 20,
    padding: 15
  },
})