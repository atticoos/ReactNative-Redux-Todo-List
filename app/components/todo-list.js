'use strict';

import React, {StyleSheet, Component, View, Text, TouchableOpacity} from 'react-native';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  toggleCompletion (todo, index) {
    var {completeTodo, incompleteTodo} = this.props;
    if (todo.completed) {
      incompleteTodo(index);
    } else {
      completeTodo(index);
    }
  }
  render() {
    var {addTodo} = this.props;
    var todos = this.props.todos.map((todo, index) => {
      return (
        <View key={index} style={styles.row}>
          <TouchableOpacity
            style={styles.text}
            onPress={() => this.toggleCompletion(todo, index)}>
            <Text>Complete</Text>
          </TouchableOpacity>
          <Text style={styles.text}>{todo.completed ? 'Completed' : 'Not Completed'}</Text>
          <Text style={styles.text}>{todo.name}</Text>
        </View>
      )
    })
    return (
      <View style={styles.container}>
        <Text>Todos:</Text>
        {todos}
        <TouchableOpacity onPress={() => addTodo('WOWZAR')}>
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
  },
  row: {
    flexDirection: 'row'
  },
  text: {
    flex: 1
  }
});

export default TodoList;
