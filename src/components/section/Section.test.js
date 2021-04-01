import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Section from './Section'
import { act } from 'react-dom/test-utils'

describe('Section component', () => {
  let wrapper
  let setComplete
  let checkbox

  const TestComponent = ({updateCompleted}) => {
    setComplete = updateCompleted
    return <div data-testid="test-element"></div>
  }

  beforeEach(() => {
    wrapper = render((
      <Section id="test">
        <TestComponent />
      </Section>
    ))
    checkbox = wrapper.getByTestId('test-complete')
  })

  it('displays its contents', () => {
    const testDiv = wrapper.getByTestId('test-element')
    expect(testDiv).toBeInTheDocument()
  })

  it('sets the checkbox value based on the value passed to updateCompleted', () => {
    const COMPLETE = true 
    act(() => setComplete(COMPLETE))
    expect(checkbox.checked).toBe(COMPLETE)
  })

  it('can manually update the completed checkbox', () => {
    expect(checkbox.checked).toBe(false)
    fireEvent.click(checkbox)
    expect(checkbox.checked).toBe(true)
  })
})