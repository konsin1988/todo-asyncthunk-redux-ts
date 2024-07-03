import React from 'react'
import classes from './index.module.css'
import { useSelector } from 'react-redux'

const InputField = ({title, handleInput, handleSubmit}) => {

  const data = useSelector(state => state.todos.todos)
  return (
    <label className={classes.label}>
        <input className={classes.input} type="text" value={title} onChange={(e) => handleInput(e.target.value)} />
        <button className={classes.button} onClick={ handleSubmit }>Add Todo</button>
      </label>
  )
}

export default InputField