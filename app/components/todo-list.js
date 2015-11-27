'use strict';

import React, {
  StyleSheet,
  Component,
  View,
  Text,
  ListView
} from 'react-native';
import CompleteToggle from './complete-toggle';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    };
    if (this.props.todos) {
      this.state.dataSource = this.state.dataSource.cloneWithRows(this.props.todos);
    }
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.todos !== this.props.todos) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.todos)
      });
    }
  }
  renderRow = (todo, a, index) => {
    var {completeTodo, incompleteTodo} = this.props;
    index = parseInt(index);
    return (
      <View key={index} style={styles.row}>
        <CompleteToggle
          checked={todo.completed}
          onChecked={() => completeTodo(index)}
          onUnchecked={() => incompleteTodo(index)}
          />
        <Text style={styles.text}>{todo.name}, {index}</Text>
      </View>
    )
  }
  render() {
    var {completeTodo, incompleteTodo} = this.props;

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow} />
    );


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
