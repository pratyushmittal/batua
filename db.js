'use strict';
import reactNativeStore from 'react-native-store';
var _ = require('lodash/date');

let DB = {
  getBalance(account, callback) {
    this.entries.find({where: {account: account}})
      .then(entries => this.total(entries))
      .then(callback);
  },

  addRecord(entries, meta, callback) {
    if(this.total(entries) !== 0) {
      throw Error("Entry total failed");
    }
    return this.journal.add(meta)
      .then(record => {
        entries.map(line => line.jid = record._id);
        return this.entries.multiAdd(entries);
      });
  },

  total(entries) {
    if(!entries)
      return 0;
    return entries.reduce(function(prev, entry) {
      var curr = entry.vector == 'debit' ? entry.amount : entry.amount * -1;
      return prev + curr;
    }, 0);
  }
};

reactNativeStore.model('accounts').then(resp => DB.accounts = resp);
reactNativeStore.model('entries').then(resp => DB.entries = resp);
reactNativeStore.model('journal').then(resp => DB.journal = resp);
module.exports = DB;
