"use strict";
import React, {
  Component,
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import Colors from './colors';

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: Colors.secondary,
    flexDirection: "column",
  },
  logo: {
    width: 200,
    height: 200,
    margin: 25,
  },
  menuItem: {
    padding: 10,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
});

export default function Drawer(props) {
  return <View style={styles.menu}>
    <Image style={styles.logo} source={require('./images/batua.png')} />
    <Text style={styles.menuItem}>Ledgers</Text>
    <Text style={styles.menuItem}>Journal</Text>
  </View>;
}
