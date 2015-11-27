import * as actions from './actionTypes';
import _ from 'lodash';

export function addTodo(name, completed) {
  return {
    type: actions.ADD,
    todo: {
      id: _.uniqueId('todo_'),
      name: name,
      completed: completed === true
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
