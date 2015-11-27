'use strict';

import * as actions from '../actions/actionTypes';
import _ from 'lodash';

export default function todosReducer (todos = [], action = {}) {
  switch (action.type) {
    case actions.ADD:
      return [
        ...todos,
        action.todo
      ];
    case actions.COMPLETE:
      var index = _.findIndex(todos, (todo) => todo.id === action.id);
      if (index === -1) {
        return todos;
      }
      return [
        ...todos.slice(0, index),
        Object.assign({}, todos[index], {
          completed: true
        }),
        ...todos.slice(index + 1)
      ];
    case actions.INCOMPLETE:
      var index = _.findIndex(todos, (todo) => todo.id === action.id);
      if (index === -1) {
        return todos;
      }
      return [
        ...todos.slice(0, index),
        Object.assign({}, todos[index], {
          completed: false
        }),
        ...todos.slice(index + 1)
      ];
    default:
      return todos;
  }
}
