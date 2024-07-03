import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DotLoader } from 'react-spinners'
import { IoIosAlert } from "react-icons/io";

import classes from './App.module.css'
import TodoList from './components/TodoList'
import InputField from './components/InputField'
import { addNewTodo, fetchTodos } from './store/slices/todoSlice'
import AnimatedHeaderImage  from './components/AnimatedHeaderImage'
import Clock from './components/Clock'

function App() {
  const [title, setTitle] = useState('')
  const { status, error } = useSelector(state => state.todos)

  const dispatch = useDispatch();

  const addTask = () => {
    title.trim().length > 4 && 
    dispatch(addNewTodo({ title })) &&
    setTitle('')
  }

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])


  return (
    <div className={classes.main}>
      <AnimatedHeaderImage/>
      <Clock/>
      <InputField title={title} handleInput={setTitle} handleSubmit={addTask}/>

      {status === 'loading' && <DotLoader color='#65F4F0'
        size={90}
        aria-label="Loading Spinner"
        data-testid="loader" className='opacity-85'/>}
        {error && <>
        <h2 className='mt-20 text-2xl font-bold font-mono'>An error occured: { error}</h2>
        <IoIosAlert size={'5em'} className='mt-14' color='red'/>
        </>
        }
      <TodoList/>
  
    </div>
  );
}

export default App;
