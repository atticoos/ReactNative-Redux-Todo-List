import * as actions from './actionTypes';

export function add(todo) {
  return {
    type: actions.ADD,
    todo: todo
  };
}
