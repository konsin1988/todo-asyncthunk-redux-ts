import React from 'react'
import classes from './index.module.css'

const TodoItem = ({id, text, completed, removeTodo, toggleTodoComplete} ) => {
  return (
    <li key={id} className={classes.li}>
        <input type="checkbox" 
          className={classes.checkbox} 
          checked={completed} 
          onChange={ ()=> toggleTodoComplete(id) } />
        <span className={classes.text} >{text}</span>
        <span className={classes.cross} onClick={() => removeTodo(id)}>&times;</span>
    </li>
  )
}

export default TodoItem