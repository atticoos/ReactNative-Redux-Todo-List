import React, {Component, View, Text} from 'react-native';
import {Provider} from 'react-redux/native';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      {() => <TodoApp />}
      </Provider>
    );
  }
}
