import React from 'react'

export default function Section({id, children}) {
  return (
    <section>
      <input type="checkbox" data-testid={`${id}-done`} />
      {children}
    </section>
  )
}