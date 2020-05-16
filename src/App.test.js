import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = render(<App />)
  })

  it('shows the attribution', () => {
    const attribution = wrapper.getByText(/Jo Torr/)
    expect(attribution).toBeInTheDocument()
  })
  
  describe('equipment', () => {
    it('shows the needle size', () => {
      const needles = wrapper.getByText(/needles/i)
      expect(needles).toBeInTheDocument()
    })
  
    it('shows the yarn size', () => {
      const yarn = wrapper.getByText(/yarn/i)
      expect(yarn).toBeInTheDocument()
    })
  })

  it('shows the size picker', () => {
    const sizePickerHeader = wrapper.getByText(/Size/)
    expect(sizePickerHeader).toBeInTheDocument()
  })

  it('shows the cast-on section', () => {
    const castOnHeader = wrapper.getByText(/toe/i)
    expect(castOnHeader).toBeInTheDocument()
  })

  describe('context', () => {
    it('updates the cast-on when the size is changed', () => {

    })
  })
})

