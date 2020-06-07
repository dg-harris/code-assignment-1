import React from 'react'
import { ImageDisplay } from './ImageDisplay'
import './SearchedImages.css'

export type ImageDisplayData = Pick<
  PixabayImage,
  'id' | 'webformatURL' | 'tags' | 'pageURL' | 'likes' | 'favorites'
>
export interface SearchedImagesProps {
  images: ImageDisplayData[]
  savedImages: ImageLinkData[]
  onSave: (imageLinkData: ImageLinkData) => void
  onRemove: (id: number) => void
}
export const SearchedImages: React.FC<SearchedImagesProps> = ({
  images,
  savedImages,
  onSave,
  onRemove,
}) => {
  return (
    <div className="searched-images">
      {images.map((image, index) => {
        const isSaved = savedImages.some(
          (savedImage) => savedImage.id === image.id
        )
        return (
          <ImageDisplay
            key={index}
            image={image}
            isSaved={isSaved}
            onSave={onSave}
            onRemove={onRemove}
          />
        )
      })}
    </div>
  )
}
