import React, {Component, View} from 'react-native';
import {bindActionCreators} from 'redux';
import TodoList from '../components/todo-list';
import AddTodo from '../components/add-todo';
import * as todoActions from '../actions/todoActions';
import {connect} from 'react-redux/native';


@connect(state => ({
  state: state.todo
}))
class TodoApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {state, dispatch} = this.props;
    return (
      <View style={{flex: 1}}>
        <TodoList
          todos={state.todos}
          {...bindActionCreators(todoActions, dispatch)} />
        <AddTodo
          {...bindActionCreators(todoActions, dispatch)} />
      </View>
    );
  }
}

export default TodoApp;
