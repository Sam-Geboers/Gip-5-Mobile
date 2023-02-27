import { StyleSheet, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.user}>Welcome back, User!</Text>
      <FontAwesomeIcon style={styles.ellipsis} icon={ faBars } />
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