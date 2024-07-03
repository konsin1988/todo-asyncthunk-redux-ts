import React from 'react'
import classes from './index.module.css'

const InputField = ({text, handleInput, handleSubmit}) => {
  return (
    <label>
        <input className={classes.input} type="text" value={text} onChange={(e) => handleInput(e.target.value)} />
        <button className={classes.button} onClick={ handleSubmit }>Add Todo</button>
      </label>
  )
}

export default InputField