import React from 'react'
import { render } from '@testing-library/react'
import Heel from './Heel'
import sizes from '../../sizes.json'

describe('Heel', () => {
  let wrapper

  beforeEach(() => {
    wrapper = render(<Heel size={sizes.medium.id} />)
  })

  it('should show instructions for first two short rows', () => {
    const startShortRows = wrapper.queryAllByText(/W&T/).filter(element => element.textContent.includes('before marker'))
    expect(startShortRows.length).toBe(2)
  })

  it('should show instructions for remaining short rows', () => {
    const remainingShortRows = wrapper.queryAllByText(/W&T/).filter(element => element.textContent.includes('before gap'))
    expect(remainingShortRows.length).toBe(2)
  })

  it('should show short rows end state', () => {
    const shortRowsEndState = wrapper.queryByText(/repeat rows 3 & 4 until there are/i)
    expect(shortRowsEndState).toBeInTheDocument()
  })

  it('should lift and knit the wraps knit-side', () => {
    const liftAndKnit = wrapper.queryByText(/lift & knit/i)
    expect(liftAndKnit).toBeInTheDocument()
  })

  it('should lift and purl the wraps purl-side', () => {
    const liftAndPurl = wrapper.queryByText(/lift & purl/i)
    expect(liftAndPurl).toBeInTheDocument()
  })

  it('should show the turned heel end state', () => {
    const soleStitchesRemaining = wrapper.queryByText(/sole stitches remain/i)
    expect(soleStitchesRemaining).toBeInTheDocument()
  })

  it('should show the heel flap instructions', () => {
    const removeMarkers = wrapper.queryAllByText(/RM/)
    expect(removeMarkers.length).toBe(2)

    const knitRows = wrapper.queryAllByText(/before gap/).filter(({textContent}) => textContent.includes('SSK') && !textContent.includes('K1'))
    expect(knitRows.length).toBe(1)

    const purlRows = wrapper.queryAllByText(/before gap/).filter(element => element.textContent.includes('P2tog'))
    expect(purlRows.length).toBe(1)

  })

  it('should show the heel flap end state', () => {
    const endState = wrapper.queryByText(/2 stitches remain outside each gap/)
    expect(endState).toBeInTheDocument()
  })

  it('should finish the heel flap', () => {
    const returnToRounds = wrapper.queryByText(/return to working in the round/)
    expect(returnToRounds).toBeInTheDocument()
  })

})