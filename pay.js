"use strict";
import React, {
  Component,
  StyleSheet,
  View,
  Text,
  TextInput,
  Switch
} from 'react-native';

export default class Pay extends Component {
  constructor() {
    super();
    this.state = {isExpense: true};
  }

  renderExpense() {
    return <View style={this.props.styles.group}>
      <Text>Spent For:</Text>
      <Text>Night Out</Text>
    </View>;
  }

  renderDue() {
    return <View style={this.props.styles.group}>
      <Text>Paid to:</Text>
      <Select optionListRef={() => this.refs.OPTIONSLIST} width={200} height={200}>
        <Option>Bansi</Option>
        <Option>Basanti</Option>
      </Select>
      <OptionList ref="OPTIONSLIST" />
    </View>;
  }

  render() {
    let styles = this.props.styles;
    let options = this.state.isExpense ? this.renderExpense() : this.renderDue();
    return <View style={styles.container}>
      <Text style={styles.label}>Amount Paid</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.title} />
      <View style={styles.group}>
        <Text style={styles.label}>Amount is a Due?</Text>
        <Switch
          onValueChange={() => this.setState({isExpense: !this.state.isExpense})}
          value={this.state.isExpense} />
      </View>
      {options}
      <Text>Remarks</Text>
      <Text>Attachments</Text>
      <Text>Recurring</Text>
    </View>;
  }
}
