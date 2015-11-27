'use strict';

import * as actions from '../actions/actionTypes';

const initialState = {
  todos: []
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
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, action.index),
          Object.assign({}, state.todos[action.index], {
            completed: true
          }),
          ...state.todos.slice(action.index + 1)
        ]
      };
    case actions.INCOMPLETE:
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, action.index),
          Object.assign({}, state.todos[action.index], {
            completed: false
          }),
          ...state.todos.slice(action.index + 1)
        ]
      };
    default:
      return state;
  }
}
