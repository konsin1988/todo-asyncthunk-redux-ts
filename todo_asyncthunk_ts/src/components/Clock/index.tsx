import React, { useState } from 'react'
import classes from './style.module.css'
import { setClock } from '../../store/slices/clockSlice'
import { useAppSelector, useAppDispatch } from './../../hooks/hooks'

const Clock: React.FC = () => {
    const dispatch = useAppDispatch()

    console.log()

    setTimeout(() => {
        const time = new Date().toLocaleTimeString()
        dispatch(setClock({time}))
    }, 1000)
  return (
    <div className={classes.clock}>{useAppSelector(state => state.clock.time)}</div>
  )
}

export default Clock