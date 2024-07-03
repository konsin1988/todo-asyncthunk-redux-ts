import classes from './index.module.css'
import TodoItem from './../TodoItem'

import React from 'react'

const TodoList = ( {todos, removeTodo, toggleTodoComplete}) => {
  return (
   <ul className={classes.ul}>
        {
          todos.map(todo => <TodoItem 
            key={todo.id} 
            removeTodo={removeTodo} 
            toggleTodoComplete={toggleTodoComplete} 
          {...todo} />)
        }
      </ul>
  )
}

export default TodoList

