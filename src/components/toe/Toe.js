import React from 'react'
import './Toe.css'
import sizes from '../../sizes.json'

export default function({ size }) {
  return (
    <section>
      <h2>Toe</h2>
      { sizes[size] ?
          <p>Using Judy's Magic Cast On, cast on <span className="stitch-count">{sizes[size]['cast-on']}</span> stitches</p>
        : <p>To continue, please select a size from above</p>
      }
    </section>
  )
}