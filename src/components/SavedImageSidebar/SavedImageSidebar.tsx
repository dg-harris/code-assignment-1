import React from 'react'
import './SavedImageSidebar.css'
import { Icon } from 'semantic-ui-react'

export const SavedImageSidebar: React.FC<{ savedImages?: ImageLinkData[] }> = ({
  savedImages = [],
}) => {
  return (
    <div className="saved-image-sidebar">
      <h2>Saved</h2>
      {savedImages.map((image) => (
        <SavedImageLink id={image.id} pageURL={image.pageURL} key={image.id} />
      ))}
    </div>
  )
}

const SavedImageLink: React.FC<ImageLinkData> = ({ id, pageURL }) => (
  <div className="saved-image-link">
    <a href={pageURL} target="_blank" rel="noopener noreferrer">
      #{id}
      {/* <img src={openInNewIcon} alt="open-in-new-window" /> */}
      <Icon name="external alternate" />
    </a>
  </div>
)
