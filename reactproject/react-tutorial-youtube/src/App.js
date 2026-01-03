// import logo from './logo.svg';
// import './App.css';
import {useState, useRef} from 'react';
import TodoList from './TodoList' ;
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todos, setTodos] = useState([
      {id: 1, name:"Todo1", completed: false},  
    ]);

  const todoNameRef = useRef();

  const handleAddTodo = () => {
    // ここに新しいタスクを追加する処理を書く
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), name: name, completed: false}];
    });
    todoNameRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  const handleClear = () => {
    const netTodos = todos.filter((todo) => !todo.completed);
    setTodos(netTodos); 
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameRef} />
      <button onClick={(handleAddTodo)}>タスクを追加</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      <div>残りのタスク数:{todos.filter(todo => !todo.completed).length}</div>
    </>
  );


}

export default App;
