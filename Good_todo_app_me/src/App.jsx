import { useEffect, useState } from 'react'
import TodoList from './assets/TodoList';
import InputNewTaskComponent from './assets/InputNewTaskComponent';
import './App.css'

const initialTodoList = [
  {id :1, task : 'task1'},
  {id :2, task : 'task2'},
  {id :3, task : 'task3'},
]

function App() {

  const [todoList, setToList] = useState(undefined);

  useEffect(()=>{
    setToList(initialTodoList);
  },[])

  return (
    <>
      <div>
        <h2>Todo App</h2>
        <TodoList todoList={todoList}/>
        <InputNewTaskComponent todoList={todoList} setToList={setToList}/>
      </div>
    </>
  )
}

export default App
