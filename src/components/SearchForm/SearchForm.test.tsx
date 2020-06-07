import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { SearchForm } from './SearchForm'

describe('Search Form', () => {
  it('performs a search with the set keyword and categories when the search button is clicked', async () => {
    const searchMock = jest.fn()
    const view = render(<SearchForm searchFunction={searchMock} />)
    const keywordField = await view.getByPlaceholderText('Keyword...')
    const categoryField = await view.getByRole('listbox')
    const searchButton = await view.getByText('Search')
    fireEvent.change(keywordField, { target: { value: 'test_keyword' } })
    // Open category select and select category 1
    fireEvent.click(categoryField)
    fireEvent.click(await view.getByText('Backgrounds'))

    fireEvent.click(searchButton)
    expect(searchMock.mock.calls.length).toBe(1)
    expect(searchMock.mock.calls[0]).toEqual(['test_keyword', 'backgrounds'])
  })
  it('performs a search with the set keyword when enter is pressed in the keyword field', async () => {
    const searchMock = jest.fn()
    const view = render(<SearchForm searchFunction={searchMock} />)
    const keywordField = await view.getByPlaceholderText('Keyword...')
    const searchButton = await view.getByText('Search')
    fireEvent.change(keywordField, { target: { value: 'test_keyword' } })
    fireEvent.keyDown(keywordField, { event: { key: 'Enter' } })

    fireEvent.click(searchButton)
    expect(searchMock.mock.calls.length).toBe(1)
    expect(searchMock.mock.calls[0]).toEqual(['test_keyword', ''])
  })
})
