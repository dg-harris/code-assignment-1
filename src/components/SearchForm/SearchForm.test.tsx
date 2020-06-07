import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { SearchForm } from './SearchForm'

describe('Search Form', () => {
  it('performs a search with the set keyword and categories when the search button is clicked', async () => {
    const searchMock = jest.fn()
    const view = render(<SearchForm searchFunction={searchMock} />)
    const keywordField = await view.getByPlaceholderText('Keyword...')
    const categoryField = await view.getByPlaceholderText('Category...')
    const searchButton = await view.getByText('Search')
    fireEvent.change(keywordField, { target: { value: 'test_keyword' } })
    // Open category select and select category 1
    fireEvent.click(categoryField)
    fireEvent.click(await view.getByText('Test 1'))

    // Open category select and select category 2
    fireEvent.click(categoryField)
    fireEvent.click(await view.getByText('Test 2'))

    fireEvent.click(searchButton)
    expect(searchMock.mock.calls.length).toBe(1)
    expect(searchMock.mock.calls[0]).toEqual([
      'test_keyword',
      ['test1', 'test2'],
    ])
  })
  it('performs a search when the enter button is pressed while editing keywords', async () => {
    const searchMock = jest.fn()
    const view = render(<SearchForm searchFunction={searchMock} />)
    const keywordField = await view.getByPlaceholderText('Keyword...')
    fireEvent.keyDown(keywordField, { key: 'Enter', code: 'Enter' })
    expect(searchMock.mock.calls.length).toBe(1)
  })
})
