import React, { useState } from 'react'
import './App.css'
import { SavedImageSidebar } from './components/SavedImageSidebar/SavedImageSidebar'
import { SearchForm } from './components/SearchForm/SearchForm'
import { SearchedImages } from './components/SearchedImages/SearchedImages'
import { searchPixabayImages } from './services/pixabay-service'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'

function App() {
  // Search result images
  const [images, setImages] = useState<PixabayImage[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const searchFunction = async (keyword: string, category: string) => {
    setIsLoading(true)
    try {
      const searchResult = await searchPixabayImages(keyword, category)
      setImages(searchResult)
    } catch (error) {
      toast.error('Error retrieving images!')
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  // Saved images
  const [savedImages, setSavedImages] = useState<ImageLinkData[]>([])
  const saveImage = (imageLinkData: ImageLinkData) =>
    setSavedImages([...savedImages, imageLinkData])
  const removeSavedImage = (id: number) =>
    setSavedImages(savedImages.filter((imageLink) => imageLink.id !== id))

  return (
    <div className="App">
      <ToastContainer />
      <SearchForm searchFunction={searchFunction} />
      {isLoading && (
        <div className="searched-images">
          <Segment style={{ height: '100%', width: '100%' }}>
            <Dimmer active>
              <Loader indeterminate>Preparing Images</Loader>
            </Dimmer>
          </Segment>
        </div>
      )}
      {!isLoading && (
        <SearchedImages
          images={images}
          savedImages={savedImages}
          onSave={saveImage}
          onRemove={removeSavedImage}
        />
      )}
      <SavedImageSidebar savedImages={savedImages} />
    </div>
  )
}

export default App
