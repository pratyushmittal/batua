"use strict";
import React, {
  Component,
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class Receive extends Component {
  render() {
    var styles = this.props.styles;
    return <View style={styles.container}>
      <Text style={styles.title}>Receive</Text>
      <Text style={styles.help}>Income</Text>
    </View>;
  }
}
