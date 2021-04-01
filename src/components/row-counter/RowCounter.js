import React, { useState } from 'react'
import './RowCounter.css'

export default function RowCounter({id, rowLabels, length, updateCompleted}) {
  const [highlightIndex, setHighlightIndex] = useState()
  const [doneIndex, setDoneIndex] = useState()
  const rows = rowLabels || Array.from(Array(length || 0), (_, index) => index + 1)

  const markDone = (index) => {
    setDoneIndex(index)
    updateCompleted && updateCompleted(index === rows.length - 1)
  }

  return (
    <ul className="row-counter" data-testid={`${id}-counter`}>
      { rows.map((row, index) => (
        <li 
          key={index}             
          onMouseEnter={() => setHighlightIndex(index)}
          onMouseLeave={() => setHighlightIndex(-1)}
          className={index <= highlightIndex ? 'row-counter-hover' : ''} >
          <input 
            id={`${id}-row-${index}`} type="checkbox"
            checked={index <= doneIndex}
            onChange={() => markDone(index)}
          />
          <label htmlFor={`${id}-row-${index}`}>{row}</label>
        </li>
      ))}
    </ul>
  )
}