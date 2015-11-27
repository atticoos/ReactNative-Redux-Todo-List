import React, {StyleSheet, Component, View, Modal} from 'react-native';
import {bindActionCreators, dispatch} from 'redux';
import * as todoActions from '../actions/todoActions';
import * as visibilityActions from '../actions/visibilityActions';
import * as addModalVisibilityActions from '../actions/addModalVisibilityActions';
import {VisibilityFilters} from '../actions/actionTypes';
import {connect} from 'react-redux/native';
import TitleBar from '../components/title-bar';
import TodoList from '../components/todo-list';
import AddTodo from '../components/add-todo';
import Filters from '../components/filters';

import store from '../store';
store.dispatch(todoActions.addTodo('Foo Bar'));
store.dispatch(todoActions.addTodo('Hello World'));

@connect(state => ({
  todos: state.todos.filter(todo => {
    if (state.filter === VisibilityFilters.ALL) {
      return true;
    } else if (state.filter === VisibilityFilters.COMPLETED) {
      return todo.completed;
    } else if (state.filter === VisibilityFilters.INCOMPLETE) {
      return !todo.completed;
    }
  }),
  filter: state.filter,
  addModalVisible: state.addModal.visible
}))
class TodoApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {todos, filter, dispatch, addModalVisible} = this.props;
    return (
      <View style={styles.container}>
        <TitleBar
          activeFilter={filter}
          {...bindActionCreators(addModalVisibilityActions, dispatch)} />
        <TodoList
          activeFilter={filter}
          todos={todos}
          {...bindActionCreators(todoActions, dispatch)} />
        <Filters
          activeFilter={filter}
          {...bindActionCreators(visibilityActions, dispatch)} />
        <Modal
          animated={true}
          transparent={false}
          visible={addModalVisible}>
          <AddTodo
            {...bindActionCreators(todoActions, dispatch)}
            {...bindActionCreators(addModalVisibilityActions, dispatch)}
            />
        </Modal>
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
