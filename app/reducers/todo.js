import * as actions from '../actions/actionTypes';

const initialState = {
  todos: []
}

export default function todos (state = initialState, action = {}) {
  switch (action.type) {
    case: actions.ADD:
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
