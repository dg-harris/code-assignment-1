import { render } from '@testing-library/react'
import { noImagesSaved, twoImagesSaved } from './SavedImageSidebar.stories'
import { twoImagesMock } from './mock-saved-images'

describe('SavedImageSidebar', () => {
  it('renders the saved header text when no images are saved', () => {
    const view = render(noImagesSaved())
    expect(view.getByText('Saved')).toBeTruthy()
  })
  it('renders the header and links when passed saved images', async () => {
    const view = render(twoImagesSaved())
    expect(view.getByText('Saved')).toBeTruthy()
    const link1 = await view.getByText(`#${twoImagesMock[0].id}`)
    expect(link1.getAttribute('href')).toEqual(twoImagesMock[0].pageURL)
    const link2 = await view.getByText(`#${twoImagesMock[1].id}`)
    expect(link2.getAttribute('href')).toEqual(twoImagesMock[1].pageURL)
  })
})
