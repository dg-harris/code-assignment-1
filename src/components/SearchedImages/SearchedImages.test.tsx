import React from 'react'
import { mockImages } from './mock-images'
import { SearchedImages } from './SearchedImages'
import { render, fireEvent } from '@testing-library/react'

describe('Searched Images', () => {
  const onSaveMock = jest.fn()
  const onRemoveMock = jest.fn()
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('it shows the save bar when an image is clicked and saves an image when the save bar is clicked', async () => {
    const view = render(
      <SearchedImages
        images={mockImages}
        savedImages={[{ id: 1, pageURL: 'test' }]}
        onSave={onSaveMock}
        onRemove={onRemoveMock}
      />
    )
    const images = await view.findAllByRole('img')
    fireEvent.mouseEnter(images[0])
    const saveButton = await view.getByText('Save')
    fireEvent.click(saveButton)
    expect(onSaveMock.mock.calls.length).toBe(1)
  })
  it('it shows the remove bar when a saved image is clicked and removes an imae when the remove bar is clicked', async () => {
    const view = render(
      <SearchedImages
        images={mockImages}
        savedImages={[{ id: 1, pageURL: 'test' }]}
        onSave={onSaveMock}
        onRemove={onRemoveMock}
      />
    )
    const images = await view.findAllByRole('img')
    fireEvent.mouseEnter(images[0])
    const saveButton = await view.getByText('Saved')
    fireEvent.click(saveButton)
    expect(onRemoveMock.mock.calls.length).toBe(1)
  })
})
