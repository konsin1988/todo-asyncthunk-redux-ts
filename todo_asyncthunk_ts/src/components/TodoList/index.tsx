import classes from './index.module.css'
import TodoItem from '../TodoItem'
import React from 'react'
import { useAppSelector } from './../../hooks/hooks'

const TodoList: React.FC = () => {
  const todos = useAppSelector(state => state.todos.todos)
  return (
   <ul className={classes.ul}>
        {
          todos.map((todo) => <TodoItem 
            key={todo.id} {...todo} />
          )
        }
      </ul>
  )
}

export default TodoList

