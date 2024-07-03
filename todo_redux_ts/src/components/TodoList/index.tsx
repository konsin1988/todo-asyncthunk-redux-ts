import classes from './index.module.css'
import TodoItem from '../TodoItem'
import { useAppSelector } from '../../hooks/hooks'
import React from 'react'

const TodoList: React.FC = () => {
  const todos = useAppSelector(state => state.todos.list)
  return (
   <ul className={classes.ul}>
        {
          todos.map(todo => <TodoItem 
            key={todo.id} {...todo} />
          )
        }
      </ul>
  )
}

export default TodoList

