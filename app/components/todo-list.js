'use strict';

import React, {StyleSheet, Component, View, Text, TouchableOpacity} from 'react-native';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var add = this.props.add;
    var todos = this.props.todos.map((todo, index) => {
      return (
        <View key={index}>
          <Text>{todo.name}</Text>
        </View>
      )
    })
    return (
      <View style={styles.container}>
        <Text>Todos:</Text>
        {todos}
        <TouchableOpacity onPress={() => add({name: 'WOWZAR'})}>
          <Text>Add New</Text>
        </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default TodoList;
