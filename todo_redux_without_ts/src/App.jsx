import { useState } from 'react'
import classes from './App.module.css'
import TodoList from './components/TodoList'
import InputField from './components/InputField'
import { useDispatch } from 'react-redux'
import { addTodo } from './store/slices/todoSlice'

function App() {
  const [text, setText] = useState('')

  const dispatch = useDispatch();
  const addTask = () => {
    dispatch(addTodo({ text }))
    setText('')
  }


  const toggleTodoComplete = (todoId) => {
    // setTodos(todos.map(todo => {
    //   todo.id === todoId && (todo.completed = !todo.completed)
    //   return todo
    // }))
  }

  return (
    <div className={classes.main}>
      <InputField text={text} handleInput={setText} handleSubmit={addTask}/>

      <TodoList/>
  
    </div>
  );
}

export default App;
