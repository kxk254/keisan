// import logo from './logo.svg';
// import './App.css';
import {useState, useRef} from 'react';
import TodoList from './TodoList' ;

function App() {

  const [todos, setTodos] = useState([
      {id: 1, name:"Todo1", completed: false},  
    ]);

  const todoNameRef = useRef();

  const handleAddTodo = () => {
    // ここに新しいタスクを追加する処理を書く
    console.log(todoNameRef);
  };

  return (
    <>
      <TodoList todos={todos} />
      <input type="text" ref={todoNameRef} />
      <button onClick={(handleAddTodo)}>タスクを追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク数:0</div>
    </>
  );


}

export default App;
