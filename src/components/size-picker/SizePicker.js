import React from 'react'
import './SizePicker.css'
import sizes from '../../sizes.json'

const SIZES = Object.keys(sizes)
const INCHES = Object.values(sizes).map(size => size.circumference)

export default function SizePicker({ selectedSize, setSize }) {

  const setSizeSelected = (event) => {
    setSize(event.target.id)
  }

  return (
    <section>
      <h2>Size</h2>
      <p>Assuming a gauge of ~8sts/11 rows / inch. Measurements given are mid-foot circumference.</p>
      <ul className="size-switch">
        {SIZES.map((size, index) => {
          return (
            <li key={size}>
              <input
                data-testid={`size-${size}`}
                type="radio" 
                name="size" 
                id={size} 
                value={size} 
                checked={selectedSize === size} 
                onChange={setSizeSelected} 
              />
              <label htmlFor={size}>{size} ({INCHES[index]}")</label>
            </li>
          )
        })}
      </ul>
    </section>
  )
}