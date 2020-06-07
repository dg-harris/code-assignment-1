import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import App from './App'
import Axios from 'axios'
import axiosMockAdapter from 'axios-mock-adapter'
import { mockImageResponse } from './services/mock-image-response'

describe('Main App', () => {
  it('Performs a search with the correct parameters and renders the results', async () => {
    const axiosMock = new axiosMockAdapter(Axios)
    axiosMock.onGet('https://pixabay.com/api/').reply(200, mockImageResponse)
    const view = render(<App />)
    const keywordField = await view.getByPlaceholderText('Keyword...')
    const categoryField = await view.getByRole('listbox')
    const searchButton = await view.getByText('Search')
    fireEvent.change(keywordField, { target: { value: 'test_keyword' } })
    fireEvent.click(categoryField)
    fireEvent.click(await view.getByText('Backgrounds'))

    fireEvent.click(searchButton)
    const images = await view.findAllByAltText('search result')
    // Correct source
    expect(images[0]).toHaveAttribute(
      'src',
      mockImageResponse.hits[0].webformatURL
    )
    // Correct Tags
    expect(view.getByText('cat')).toBeTruthy()
    expect(view.getByText('curtain')).toBeTruthy()
    expect(view.getByText('bird')).toBeTruthy()
  })
})
