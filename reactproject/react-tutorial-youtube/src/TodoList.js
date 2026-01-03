// import TodoList from './TodoList';
import React from 'react';
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return todos.map((todo) => <Todo todo={todo} keu={todo}/>);
}

export default TodoList