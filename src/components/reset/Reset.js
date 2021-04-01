import React from 'react'
import { useDispatch } from 'react-redux'
import { resetAction } from '../../store'

export default function Reset() {
  const dispatch = useDispatch()

  const reset = () => dispatch(resetAction())

  return <button data-testid="reset-progress" onClick={reset}>Reset all progress</button>
}