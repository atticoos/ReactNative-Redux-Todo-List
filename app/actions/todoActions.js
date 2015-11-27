import * as actions from './actionTypes';
import _ from 'lodash';

export function addTodo(name) {
  return {
    type: actions.ADD,
    todo: {
      id: _.uniqueId('todo_'),
      name: name,
      completed: false
    }
  };
}

export function completeTodo(index) {
  return {
    type: actions.COMPLETE,
    index: index
  };
}

export function incompleteTodo(index) {
  return {
    type: actions.INCOMPLETE,
    index: index
  };
}
