'use strict';

import React, {Component, View, Text} from 'react-native';
import {Provider} from 'react-redux/native';
import {createStore, combineReducers} from 'redux';
import reducers from '../reducers';
import TodoApp from './todoApp';

var store = createStore(combineReducers(reducers));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      {() => <TodoApp />}
      </Provider>
    );
  }
}
