import { useState } from 'react'
import classes from './App.module.css'
import TodoList from './components/TodoList'
import InputField from './components/InputField'
import { useAppDispatch } from './hooks/hooks'
import { addTodo } from './store/slices/todoSlice'

function App() {
  const [text, setText] = useState('')

  const dispatch = useAppDispatch();
  const addTask = () => {
    text.trim().length > 4 && 
    dispatch(addTodo( text )) && setText('')
  }

  return (
    <div className={classes.main}>
      <InputField text={text} handleInput={setText} handleSubmit={ addTask }/>

      <TodoList/>
  
    </div>
  );
}

export default App;
