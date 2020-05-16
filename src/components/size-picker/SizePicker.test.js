import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SizePicker from './SizePicker'
import sizes from '../../sizes.json'

describe('SizePicker', () => {
  let wrapper
  let setSize

  const expectSizes = (sizes) => {
    sizes.forEach(size => {
      expect(wrapper.getByText(new RegExp(size))).toBeInTheDocument()
    })
  }

  beforeEach(() => {
    setSize = jest.fn()
    wrapper = render(<SizePicker setSize={setSize} />)
  })

  it('should show sizes s, m, l, xl', () => {
    expectSizes(Object.keys(sizes).map(size => `^${size}`))
  })

  it('should show circumferences in inches for each size', () => {
    const sizes = ['6.5', '8', '9', '10']
    expectSizes(sizes.map(size => `${size}"`))
  })

  it('should update the context with the size', () => {
    const medium = wrapper.getByLabelText(/medium/i)
    fireEvent.click(medium, { target: { value: medium.value }})
    expect(setSize).toHaveBeenCalledWith('medium')
  })

  it('should show no size selected by default', () => {
    const sizes = wrapper.getAllByRole('radio')
    const allUnchecked = sizes.every(size => !size.checked)
    expect(allUnchecked).toBe(true)
  })

  it('should show the currently selected size', () => {
    wrapper.rerender(<SizePicker setSize={setSize} selectedSize="x-large" />);

    const extraLarge = wrapper.getByLabelText(/x-large/i)
    expect(extraLarge.checked).toBe(true)
  })
})


