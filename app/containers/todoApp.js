import React, {Component} from 'react-native';
import {bindActionCreators} from 'redux';
import TodoList from '../components/todo-list';
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
      <TodoList
        todos={state.todos}
        {...bindActionCreators(todoActions, dispatch)} />
    );
  }
}

export default TodoApp;
