import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  let wrapper

  const setSizeToMedium = () => {
    const medium = wrapper.getByLabelText(/medium/i)
    fireEvent.click(medium, { target: { value: 'medium' }})
  }

  const clickElement = (testId) => {
    const button = wrapper.getByTestId(testId)
    fireEvent.click(button)
  }

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

  describe('No size selected', () => {
    it('shows instructions to pick size', () => {
      const instructions = wrapper.getByText(/select a size/)
      expect(instructions).toBeInTheDocument()
    })

    it('doesn\'t show the toe section', () => {
      const toeHeader = wrapper.queryByText(/^Toe$/)
      expect(toeHeader).not.toBeInTheDocument()
    })
  
    it('doesn\'t show the foot section', () => {
      const footHeader = wrapper.queryByText(/^Foot$/)
      expect(footHeader).not.toBeInTheDocument()
    })  
  })

  describe('Size selected', () => {
    beforeEach(() => {
      setSizeToMedium()
    })

    it('shows the toe section', () => {
      const toeHeader = wrapper.getByText(/^Toe$/)
      expect(toeHeader).toBeInTheDocument()
    })
  
    it('shows the foot section', () => {
      const footHeader = wrapper.getByText(/^Foot$/)
      expect(footHeader).toBeInTheDocument()
    })  

    it('shows the heel section', () => {
      const heelHeader = wrapper.getByText(/^Heel$/)
      expect(heelHeader).toBeInTheDocument()
    })
  })

  describe('Reset', () => {
    const getRows = testId => wrapper.getByTestId(testId).querySelectorAll('input')

    const completeRowCounter = (testId) => {
      const rows = getRows(testId)
      const lastRow = rows[rows.length - 1]
      fireEvent.click(lastRow)
    }

    const expectRowCounterToBeEmpty = (testId) => {
      const rows = getRows(testId)
      const firstIncompleteRow = rows.findIndex(checkbox => !checkbox.checked)
      expect(firstIncompleteRow).toBe(0)
    } 

    const expectSectionToBeIncomplete = (testId) => {
      const sectionComplete = wrapper.getByTestId(testId)
      expect(sectionComplete.checked).toBe(true)
    }
  
    beforeEach(() => {
      setSizeToMedium()
  
      completeRowCounter('toe-counter')
  
      const lengthInput = wrapper.getByLabelText(/length/)
      fireEvent.change(lengthInput, { target: { value: '20' } })
      completeRowCounter('foot-counter')
  
      clickElement('heel-complete')
      clickElement('reset-progress')
    })
  
    it('resets all row counters and done markers', () => {
      expectRowCounterToBeEmpty('toe-counter')
      expectSectionToBeIncomplete('toe-complete')

      expectRowCounterToBeEmpty('foot-counter')
      expectSectionToBeIncomplete('foot-complete')

      expectSectionToBeIncomplete('heel-complete')
    })
  
    it('doesn\'t change the size or foot length', () => {
      const mediumSize = wrapper.getByTestId('size-medium')
      expect(mediumSize.checked).toBe(true)

      const footSection = wrapper.getByText(/Continue knitting in stocking stitch until the socks measure 14\.3"/)
      expect(footSection).toBeInTheDocument()
    })
  })  
})
