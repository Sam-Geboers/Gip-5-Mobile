import { StyleSheet, Text, View } from 'react-native';

export default function Room(props) {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>{props.name}</Text>
        <Text style={styles.description}>{props.desc}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1B263B',
    alignItems: 'center',
    justifyContent: 'center',
    height: 106,
    flexBasis: 100,
    margin: 10,
    borderRadius: '25',
  },
  title: {
    color: '#fafafa',
    fontSize: 21,
    fontWeight: 'bold',
    padding: 10,
  },
  description: {
    color: '#fafafa',
    fontSize: 12,
  }
});