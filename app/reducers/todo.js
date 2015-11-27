'use strict';

import * as actions from '../actions/actionTypes';
import _ from 'lodash';

const initialState = {
  todos: [
  ]
}

export default function todos (state = initialState, action = {}) {
  switch (action.type) {
    case actions.ADD:
      return {
        ...state,
        todos: [
          ...state.todos,
          action.todo
        ]
      };
    case actions.COMPLETE:
      var index = _.findIndex(state.todos, (todo) => todo.id === action.id);
      if (index === -1) {
        return state;
      }
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, index),
          Object.assign({}, state.todos[index], {
            completed: true
          }),
          ...state.todos.slice(index + 1)
        ]
      };
    case actions.INCOMPLETE:
      var index = _.findIndex(state.todos, (todo) => todo.id === action.id);
      if (index === -1) {
        return state;
      }
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, index),
          Object.assign({}, state.todos[index], {
            completed: false
          }),
          ...state.todos.slice(index + 1)
        ]
      };
    default:
      return state;
  }
}
