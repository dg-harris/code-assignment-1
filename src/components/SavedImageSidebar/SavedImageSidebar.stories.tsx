import React from 'react'
import { SavedImageSidebar } from './SavedImageSidebar'
import { twoImagesMock } from './mock-saved-images'


export default {
    title: 'Saved Image Sidebar',
}

export const noImagesSaved = () => {
    return <SavedImageSidebar savedImages={[]} />
}

export const twoImagesSaved = () => {
    return <SavedImageSidebar savedImages={twoImagesMock} />
}