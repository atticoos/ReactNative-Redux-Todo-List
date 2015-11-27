'use strict';

import React, {
  TouchableHighlight,
  StyleSheet,
  Component,
  View,
  Text,
  ListView
} from 'react-native';
import CompleteToggle from './complete-toggle';
import AddTodoRow from './add-todo-row';
import {VisibilityFilters} from '../actions/actionTypes';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    };
    if (this.props.todos) {
      this.state.dataSource = this.state.dataSource.cloneWithRows(
        this.getTodosWithTemplate(this.props.todos)
      );
    }
  }
  getTodosWithTemplate(todos) {
    return todos.concat([{template: true}]);
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.todos !== this.props.todos) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(
          this.getTodosWithTemplate(nextProps.todos)
        )
      });
    }
  }
  renderRow = (todo) => {
    if (todo.template) {
      return this.renderTodoItemTemplate();
    } else {
      return this.renderTodoItem(todo);
    }
  }
  renderTodoItem(todo) {
    var {completeTodo, incompleteTodo} = this.props;
    return (
      <TouchableHighlight
        underlayColor="#e4f2d9"
        key={todo.id}
        style={styles.row}
        onPress={() => {
          if (todo.completed) {
            incompleteTodo(todo.id);
          } else {
            completeTodo(todo.id)
          }
        }}>
        <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
          <CompleteToggle
            style={styles.toggle}
            checked={todo.completed}
            onChecked={() => completeTodo(todo.id)}
            onUnchecked={() => incompleteTodo(todo.id)} />
          <Text style={styles.text}>{todo.name}</Text>
        </View>
      </TouchableHighlight>
    )
  }
  renderTodoItemTemplate() {
    var {addTodo, activeFilter} = this.props
    return (
      <AddTodoRow
        addTodo={(name) => addTodo(name, activeFilter === VisibilityFilters.COMPLETED)} />
    );
  }
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow} />
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
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  templateRow: {
    paddingLeft: 30
  },
  text: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10
  }
});

export default TodoList;
