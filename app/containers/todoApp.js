import React, {StyleSheet, Component, View} from 'react-native';
import {bindActionCreators} from 'redux';
import * as todoActions from '../actions/todoActions';
import {connect} from 'react-redux/native';
import TitleBar from '../components/title-bar';
import TodoList from '../components/todo-list';
import AddTodo from '../components/add-todo';


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
      <View style={styles.container}>
        <TitleBar style={styles.title} />
        <TodoList
          style={styles.list}
          todos={state.todos}
          {...bindActionCreators(todoActions, dispatch)} />
        <AddTodo
          style={styles.add}
          {...bindActionCreators(todoActions, dispatch)} />
      </View>
    );
  }
}

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
