import React from 'react'
import classes from './index.module.css'

interface InputFieldProps {
  text: string,
  handleInput: (str: string) => void,
  handleSubmit: () => void
}

const InputField: React.FC<InputFieldProps> = ({text, handleInput, handleSubmit}) => {
  return (
    <label>
        <input className={classes.input} type="text" value={text} onChange={(e) => handleInput(e.target.value)} />
        <button className={classes.button} onClick={ handleSubmit }>Add Todo</button>
      </label>
  )
}

export default InputField