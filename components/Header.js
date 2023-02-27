import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.user}>Welcome back, User!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2F3E46',
    minHeight: '15%',
    minWidth: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  user: {
    color: '#fafafa',
    fontSize: 21,
    paddingLeft: 20,
  }
})