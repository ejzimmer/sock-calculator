import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import RowCounter from './RowCounter'

describe('RowCounter component', () => {
  const ROW_COUNT = 10

  let wrapper
  let cells
  let callback
  let checkboxes

  const hoverOnCell = cell => fireEvent.mouseEnter(cells[cell])
  const unhoverCell = cell => fireEvent.mouseLeave(cells[cell])

  const clickCheckbox = index => fireEvent.click(checkboxes[index])

  const expectCellsToHaveClass = (className, lastCell) => {
    const startCells = lastCell ? cells.slice(0, lastCell) : cells
    startCells.forEach(cell => expect(cell).toHaveClass(className))
  }
  const expectCellsNotToHaveClass = (className, firstCell) => {
    const endCells = firstCell ? cells.slice(0, firstCell) : cells
    endCells.forEach(cell => expect(cell).not.toHaveClass(className))
  }

  beforeEach(() => {
    callback = jest.fn()
    wrapper = render(<RowCounter length={ROW_COUNT} onComplete={callback} />)
    cells = wrapper.getAllByRole('listitem')
    checkboxes = wrapper.getAllByRole('checkbox')
  })

  it('applies the hover state to all cells up to and including the one being hovered', () => {
    hoverOnCell(4)
    expectCellsToHaveClass('row-counter-hover', 4)
  });

  it('removes the hover state on mouseout', () => {
    hoverOnCell(4)
    unhoverCell(4)
    expectCellsNotToHaveClass('row-counter-hover')
  })

  it('marks all cells up to the current selected one as done', () => {
    clickCheckbox(6)
    const done = checkboxes.filter(checkbox => checkbox.checked)
    expect(done.length).toBe(7)
  })

  it('marks all cells after the current one as not done when a cell is deselected', () => {
    clickCheckbox(6)

    clickCheckbox(4)
    const done = checkboxes.filter(checkbox => checkbox.checked)
    expect(done.length).toBe(5)
  })

  it('notifies the parent component when the completed state changes', () => {
    clickCheckbox(ROW_COUNT - 1)
    expect(callback).toHaveBeenCalledWith(true)

    clickCheckbox(ROW_COUNT - 3)
    expect(callback).toHaveBeenCalledWith(false)
  })
})