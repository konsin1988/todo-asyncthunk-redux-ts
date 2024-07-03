import React from 'react'
import classes from './index.module.css'
import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodoComplete } from '../../store/slices/todoSlice'

const TodoItem = ( {id, text, completed} ) => {

  const dispatch = useDispatch()

  return (
    <li key={id} className={classes.li}>
        <input type="checkbox" 
          className={classes.checkbox} 
          checked={completed} 
          onChange={ () => dispatch(toggleTodoComplete({id})) } 
          />
        <span className={classes.text} >{text}</span>
        <span className={classes.cross} 
        onClick={() => dispatch(removeTodo({id})) }
        >&times;</span>
    </li>
  )
}

export default TodoItem