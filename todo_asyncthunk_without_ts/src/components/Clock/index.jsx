import React, { useState } from 'react'
import classes from './style.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setClock } from '../../store/slices/clockSlice'

const Clock = () => {
    const dispatch = useDispatch()

    console.log()

    setTimeout(() => {
        const time = new Date().toLocaleTimeString()
        dispatch(setClock({time}))
    }, 1000)
  return (
    <div className={classes.clock}>{useSelector(state => state.clock.time)}</div>
  )
}

export default Clock