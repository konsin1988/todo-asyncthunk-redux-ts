import React from 'react'
import classes from './index.module.css'
import { useAppDispatch } from './../../hooks/hooks'
import { removeTodo, toggleTodoComplete } from '../../store/slices/todoSlice'

interface TodoItemProps{
  id: string,
  text: string,
  completed: boolean
}

const TodoItem: React.FC<TodoItemProps> = ( {id, text, completed} ) => {

  const dispatch = useAppDispatch()

  return (
    <li key={id} className={classes.li}>
        <input type="checkbox" 
          className={classes.checkbox} 
          checked={completed} 
          onChange={ () => dispatch(toggleTodoComplete(id)) } 
          />
        <span className={classes.text} >{text}</span>
        <span className={classes.cross} 
        onClick={() => dispatch(removeTodo(id)) }
        >&times;</span>
    </li>
  )
}

export default TodoItem