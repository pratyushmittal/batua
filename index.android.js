/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  ToolbarAndroid,
  DrawerLayoutAndroid
} from 'react-native';
import Colors from './colors';
import Drawer from './drawer';
import Home from './wallet';

class Batua extends Component {
  render() {
    return <DrawerLayoutAndroid
      drawerWidth={250}
      renderNavigationView={Drawer}
      >
      <Home />
    </DrawerLayoutAndroid>;
  }
}


AppRegistry.registerComponent('Batua', () => Batua);
