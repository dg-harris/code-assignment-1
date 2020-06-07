import React from 'react'
import { SearchedImages, ImageDisplayData } from './SearchedImages'
import { action } from '@storybook/addon-actions'
import { mockImages } from './mock-images'
export default {
  title: 'Searched Images',
  component: SearchedImages,
}

const renderSearchedImages = (
  images: ImageDisplayData[],
  savedImages: ImageLinkData[] = []
) => {
  return (
    <SearchedImages
      images={images}
      savedImages={savedImages}
      onSave={action('save')}
      onRemove={action('remove')}
    />
  )
}
export const noImages = () => {
  return renderSearchedImages([])
}

export const twoImages = () => {
  return renderSearchedImages(mockImages, [{ id: 1, pageURL: 'image1_page' }])
}
