import React from 'react'
import { render } from '@testing-library/react'
import Toe from './Toe'
import sizes from '../../sizes.json'

describe('SizePicker', () => {
  it('should show instructions to select a size, if no size is selected', () => {
    const wrapper = render(<Toe />)
    const instructions = wrapper.getByText(/select a size/)
    expect(instructions).toBeInTheDocument()
  })

  it('should show cast on instructions for the selected size', () => {
    const wrapper = render(<Toe size={sizes.small.id} />)
    const instructions = wrapper.getByText(/20/i)
    expect(instructions).toBeInTheDocument()
  })

  it('should update the instructions when the selected size changes', () => {
    const wrapper = render(<Toe size={sizes.small.id} />)
    wrapper.rerender(<Toe size={sizes.large.id} />)
    const instructions = wrapper.getByText(/28/i)
    expect(instructions).toBeInTheDocument()
  })
})


