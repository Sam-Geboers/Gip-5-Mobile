import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export default function Header( props ) {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Text style={styles.user}>Smart Home Dashboard!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
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
    marginBottom: 10,
    paddingTop: 50,
    paddingBottom: 10,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: "#000000",
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.7,
    shadowRadius: 4,
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