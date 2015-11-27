import React, {StyleSheet, Component, View} from 'react-native';
import {bindActionCreators} from 'redux';
import * as todoActions from '../actions/todoActions';
import * as visibilityActions from '../actions/visibilityActions';
import {VisibilityFilters} from '../actions/actionTypes';
import {connect} from 'react-redux/native';
import TitleBar from '../components/title-bar';
import TodoList from '../components/todo-list';
import AddTodo from '../components/add-todo';
import Filters from '../components/filters';


@connect(state => ({
  todos: state.todo.todos.filter(todo => {
    if (state.filter === VisibilityFilters.ALL) {
      return true;
    } else if (state.filter === VisibilityFilters.COMPLETED) {
      return todo.completed;
    } else if (state.filter === VisibilityFilters.INCOMPLETE) {
      return !todo.completed;
    }
  }),
  filter: state.filter
}))
class TodoApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {todos, filter, dispatch} = this.props;
    return (
      <View style={styles.container}>
        <TitleBar style={styles.title} />
        <TodoList
          style={styles.list}
          todos={todos}
          {...bindActionCreators(todoActions, dispatch)} />
        <Filters
          active={filter}
          {...bindActionCreators(visibilityActions, dispatch)} />
      </View>
    );
  }
}
/*

<AddTodo
style={styles.add}
{...bindActionCreators(todoActions, dispatch)} />
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {

  },
  list: {
    flex: 1
  },
  add: {
    flex: 1
  }
})

export default TodoApp;
