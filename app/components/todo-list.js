'use strict';

import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TextInput
} from 'react-native';
import CompleteToggle from './complete-toggle';

class TodoList extends Component {
  render() {
    var {completeTodo, incompleteTodo} = this.props;
    var todos = this.props.todos.map((todo, index) => {
      return (
        <View key={index} style={styles.row}>
          <CompleteToggle
            checked={todo.completed}
            onChecked={() => completeTodo(index)}
            onUnchecked={() => incompleteTodo(index)}
            />
          <Text style={styles.text}>{todo.name}</Text>
        </View>
      )
    })
    return (
      <View style={styles.container}>
        <Text>Todos:</Text>
        {todos}
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
