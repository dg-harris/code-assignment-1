import React from 'react'
import { ImageDisplayData } from './SearchedImages'
import { Label, Icon } from 'semantic-ui-react'

export const ImageDisplay: React.FC<{
  image: ImageDisplayData
  isSaved: boolean
  onSave: (imageLinkData: ImageLinkData) => void
  onRemove: (id: number) => void
}> = ({ image, isSaved, onSave, onRemove }) => {
  let bannerStyleClass
  let bannerAction
  let bannerText
  if (!isSaved) {
    bannerText = 'Save'
    bannerStyleClass = 'save-banner'
    bannerAction = () => onSave({ id: image.id, pageURL: image.pageURL })
  } else {
    bannerText = 'Saved'
    bannerStyleClass = 'saved-banner'
    bannerAction = () => onRemove(image.id)
  }

  return (
    <div className="search-result">
      <div className="image-container" aria-haspopup="true">
        <img
          src={image.webformatURL}
          alt="search result"
          className="result-image"
        />
        <div className="image-overlay">
          <div
            className={`image-banner ${bannerStyleClass}`}
            onClick={bannerAction}
          >
            {bannerText}
          </div>
        </div>
      </div>
      <div className="search-result-metadata">
        <div className="search-result-tags">
          {image.tags.map((tag) => (
            <Label key={tag}>{tag}</Label>
          ))}
        </div>
        <div className="search-result-interactions">
          <div className="search-result-likes">
            {image.likes}
            <Icon name="thumbs up" />
          </div>
          <div className="search-result-favorites">
            {image.favorites}
            <Icon name="star" />
          </div>
        </div>
      </div>
    </div>
  )
}
