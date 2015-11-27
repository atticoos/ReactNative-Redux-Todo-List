'use strict';

import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native';

class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {value: null};
  }
  handleOnChange = (text) => {
    this.setState({value: text});
  }
  addTodo = () => {
    this.props.addTodo(this.state.value);
    this.setState({value: null});
  }
  render() {
    return (
      <View style={styles.view}>
        <TextInput
          style={styles.input}
          onChangeText={this.handleOnChange}
          value={this.state.value} />
        <TouchableOpacity
          style={styles.button}
          onPress={this.addTodo}>
          <Text>Add Todo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "red"
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  button: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
})

export default AddTodo;
