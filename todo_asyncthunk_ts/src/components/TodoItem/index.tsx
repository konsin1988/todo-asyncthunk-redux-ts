import React from 'react'
import classes from './index.module.css'
import { deleteTodo, toggleStatus } from '../../store/slices/todoSlice'
import { useAppDispatch } from './../../hooks/hooks'


interface ITodoItemProps {
  id: string,
  title: string,
  completed: boolean
}

const TodoItem: React.FC<ITodoItemProps> = ( {id, title, completed}) => {

  const dispatch = useAppDispatch()

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