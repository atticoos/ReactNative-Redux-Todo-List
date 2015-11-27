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

export function completeTodo(id) {
  return {
    type: actions.COMPLETE,
    id: id
  };
}

export function incompleteTodo(id) {
  return {
    type: actions.INCOMPLETE,
    id: id
  };
}
