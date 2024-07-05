import React from 'react'
import classes from './index.module.css'
import { useAppSelector } from './../../hooks/hooks'

interface IInputFieldProps {
  title: string,
  handleInput: Function,
  handleSubmit: React.MouseEventHandler<HTMLButtonElement>,
}

const InputField: React.FC<IInputFieldProps> = ({title, handleInput, handleSubmit}) => {

  const data = useAppSelector(state => state.todos.todos)
  return (
    <label className={classes.label}>
        <input className={classes.input} type="text" value={title} onChange={(e) => handleInput(e.target.value)} />
        <button className={classes.button} onClick={ handleSubmit }>Add Todo</button>
      </label>
  )
}

export default InputField