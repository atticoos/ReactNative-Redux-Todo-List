'use strict';

import * as actions from '../actions/actionTypes';

const initialState = {
  todos: [{name: 'foobar'}]
}

export default function todos (state = initialState, action = {}) {
  console.log('getting initial state', state, action);
  switch (action.type) {
    case actions.ADD:
      return {
        ...state,
        todos: [
          ...state.todos,
          action.todo
        ]
      };
    default:
      return state;
  }
}
