import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HouseScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View style={styles.roomContainer}>
        
      </View>

      <Pressable style={styles.goBackBtn} onPress={() => navigation.goBack()}>
        <Text style={styles.goBackText}>Go Back</Text>
      </Pressable>
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
  roomContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#E0E1DD',
  },
  goBackBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 60,
    marginBottom: 30,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: '#415A77',
  },
  goBackText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});