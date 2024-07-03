import React from 'react'
import classes from './index.module.css'
import { useDispatch } from 'react-redux'
import { deleteTodo, toggleStatus } from '../../store/slices/todoSlice'

const TodoItem = ( {id, title, completed} ) => {

  const dispatch = useDispatch()

  return (
    <li key={id} className={classes.li}>
        <input type="checkbox" 
          className={classes.checkbox} 
          checked={completed} 
          onChange={ () => dispatch(toggleStatus({id})) } 
          />
        <span className={classes.text} >{title}</span>
        <span className={classes.cross} 
        onClick={() => dispatch(deleteTodo({id})) }
        >&times;</span>
    </li>
  )
}

export default TodoItem