import React from 'react'
import { render } from '@testing-library/react'
import Toe from './Toe'
import sizes from '../../sizes.json'

describe('SizePicker', () => {
  let wrapper

  beforeEach(() => {
    wrapper = render(<Toe size={sizes.small.id} />)
  })

  it('should show cast on instructions for the selected size', () => {
    const instructions = wrapper.getByTestId('cast-on-instructions')
    expect(instructions).toHaveTextContent('cast on 20 stitches')
  })

  it('should update the instructions when the selected size changes', () => {
    wrapper.rerender(<Toe size={sizes.large.id} />)
    const instructions = wrapper.getByTestId('cast-on-instructions')
    expect(instructions).toHaveTextContent('cast on 28 stitches')
  })

  describe('row counter', () => {
    let rowCounter
    
    beforeEach(() => {
      rowCounter = wrapper.getByTestId('toe-counter')
    })

    it('should exist', () => {
      expect(rowCounter).toBeInTheDocument()
    })

    it('should start with 10 10 12 and end with 28 28', () => {
      expect(rowCounter).toHaveTextContent(/^10[\s]*10[\s]*12[\s0-9]*28[\s]*28$/)
    })
  })
})


