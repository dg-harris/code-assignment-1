import React from 'react'
import './SavedImageSidebar.css'
import openInNewIcon from './open_in_new.svg'

interface ImageLinkData {
    id: number
    pageURL: string
}
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
        <a href={pageURL}>
            #{id}
            <img src={openInNewIcon} alt="open-in-new-window" />
        </a>
    </div>
)
