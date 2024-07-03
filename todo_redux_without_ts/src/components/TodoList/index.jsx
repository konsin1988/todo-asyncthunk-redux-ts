import classes from './index.module.css'
import TodoItem from './../TodoItem'
import { useSelector } from 'react-redux'
import React from 'react'

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos)
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

