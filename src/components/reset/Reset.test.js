import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Reset from './Reset'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { ACTIONS } from '../../store'

describe('Reset', () => {
  let wrapper
  let button
  let resetActionReceived = false

  const testReducer = (_ = {}, action) => {
    resetActionReceived = action.type === ACTIONS.RESET
  }

  const store = createStore(testReducer)

  beforeEach(() => {
    wrapper = render((
      <Provider store={store}>
        <Reset />
      </Provider>
    ))
    button = wrapper.getByTestId('reset-progress')
  })

  it('should have a button', () => {
    expect(button).toBeInTheDocument()
  })

  it('should emit a reset action', () => {
    fireEvent.click(button)
    expect(resetActionReceived).toBe(true)
  })
})