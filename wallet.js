"use strict";
import React, {
  Component,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import db from './db';
import Colors from './colors';
import PayTab from './pay';
import ReceiveTab from './receive';
import ScrollableTabView from 'react-native-scrollable-tab-view';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  title: {
    color: Colors.black,
    fontSize: 75,
    margin: 10,
    fontFamily: 'bree',
  },
  label: {
    color: Colors.black,
    fontSize: 20,
    fontFamily: 'bree',
  },
  help: {
    color: Colors.secondary,
    fontSize: 25,
    margin: 10,
    fontFamily: 'bree',
  },
  group: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
});

const tabs = {
  tabBarUnderlineColor: Colors.black,
  tabBarBackgroundColor: Colors.blue,
  tabBarActiveTextColor: Colors.black,
  tabBarInactiveTextColor: Colors.primary,
};

export default class Wallet extends Component {
  constructor() {
    super();
    this.state = {balance: false};
  }

  componentDidMount() {
    this.fetchBalance();
  }

  fetchBalance() {
    db.getBalance('cash', balance => {
      this.setState({balance: balance});
    });
  }

  handleAdd() {
    var lines = [
      {vector: 'debit', amount: 1000, account: 'Fuel'},
      {vector: 'credit', amount: 1000, account: 'cash'}
    ];
    var meta = {remark: 'Bike'};
    db.addRecord(lines, meta).then(this.fetchBalance.bind(this));
  }

  render() {
    var balance = this.state.balance === false ? 'Wait...' : this.state.balance;
    var wallet = "Pocket Cash";
    return <ScrollableTabView tabBarPosition="top" {...tabs} initialPage={1}>
      <ReceiveTab tabLabel="Receive" styles={styles} />
      <View style={styles.container} tabLabel={wallet}>
        <Text style={styles.help}>{wallet}</Text>
        <Text style={styles.title}>{balance}</Text>
        <Text style={styles.help}>View Receivables</Text>
        <Text style={styles.help}>View Payables</Text>
        <TouchableOpacity onPress={this.handleAdd.bind(this)}>
          <Text style={styles.help}>swipe left to pay</Text>
        </TouchableOpacity>
      </View>
      <PayTab tabLabel="Pay" styles={styles} />
    </ScrollableTabView>;
  }
}
