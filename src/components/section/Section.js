import React, { useState } from 'react'
import './Section.css'

export default function Section({id, children}) {
  const ID = `${id}-complete`
  const [completed, setCompleted] = useState(false)

  const updateCompleted = (value) => setCompleted(value)

  return (
    <section className={completed ? 'completed' : ''}>
      <input 
        id={ID}
        data-testid={ID}
        type="checkbox" 
        className="section-complete"
        data-testid={ID}
        checked={completed} 
        onChange={() => updateCompleted(!completed)} 
        aria-label='completed'
      />
      <label htmlFor={ID}>✓</label>
      {React.Children.map(children, (child) => {
        if (!child) return
        const props = typeof child.type === 'function' ? { updateCompleted } : undefined
        return React.cloneElement(child,  props)
      })}
    </section>
  )
}
