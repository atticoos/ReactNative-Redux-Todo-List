'use strict';

import React, {
  Component,
  TouchableOpacity,
  StyleSheet,
  View,
  Text
} from 'react-native';

class CompleteToggle extends Component {
  toggle = () => {
    if (this.props.checked) {
      this.props.onUnchecked(this.props.index);
    } else {
      this.props.onChecked(this.props.index);
    }
  }
  getStyle() {
    if (this.props.checked) {
      return styles.active;
    } else {
      return styles.inactive;
    }
  }
  render() {
    var todo = this.props.todo;
    return (
      <TouchableOpacity
        style={[styles.button, this.getStyle()]}
        onPress={this.toggle} />
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 20,
    height: 20,
    borderRadius: 10
  },
  active: {
    backgroundColor: '#81c04d'
  },
  inactive: {
    backgroundColor: 'gray'
  }
});

export default CompleteToggle;
