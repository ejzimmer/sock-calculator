import React from 'react'
import Foot from './Foot'
import { render, fireEvent } from '@testing-library/react'
import sizes from '../../sizes.json'

describe('Foot', () => {
  let wrapper
  let lengthInput

  const setup = () => {
    wrapper = render(<Foot size={sizes.large.id} />)
    lengthInput = wrapper.getByLabelText(/length/)
  }

  const setLength = (length = '20') => {
    fireEvent.change(lengthInput, { target: { value: length } })
  }

  describe('foot length input', () => {
    let setLengthState

    beforeEach(() => {
      setLengthState = jest.fn()
      spyOn(React, 'useState').and.returnValue([18, setLengthState])
      setup()
    })

    it('has an input for the foot length', () => {
      expect(lengthInput).toBeInTheDocument()
    })
  
    it('updates the state when the length is entered', () => {
      setLength('44')
      expect(setLengthState).toHaveBeenCalledWith('44')
    })  
  })

  describe('instructions', () => {
    beforeEach(() => {
      setup()
      setLength('20')
    })

    it('shows instructions up until gusset increases', () => {
      const knitUntil = wrapper.getByText(/continue knitting/i)
      expect(knitUntil.textContent.includes('14.8"')).toBe(true)
    })
  
    it('shows gusset increase instructions', () => {
      const gussetIncreaseHeader = wrapper.getByText(/gusset increases/i)
      expect(gussetIncreaseHeader).toBeInTheDocument()

      const totalStitches = wrapper.getByText(/you should have a total of/i)
      expect(totalStitches.textContent.includes('108')).toBe(true)
    })
  
    it('shows instructions for placing markers after gusset increases', () => {
      const placeMarkersHeader = wrapper.getByText(/^Place markers$/)
      expect(placeMarkersHeader).toBeInTheDocument()

      const markerPlacements = wrapper.getByText(/place a marker after/i)
      expect(markerPlacements.textContent.includes('36')).toBe(true)
    })
  
    it('shows increases for final increase round', () => {
      const finalIncreaseHeader = wrapper.getByText(/Final increases/i)
      expect(finalIncreaseHeader).toBeInTheDocument()

      const stopWarning = wrapper.getByText(/stop/i)
      expect(stopWarning).toBeInTheDocument()
    })  
  })


})