import axios, { AxiosResponse } from 'axios'
import { PixabayResponse } from './PixabayResponse'

//TODO: move these to runtime configuration
const apiKey = process.env.REACT_APP_PIXABAY_API_KEY
const apiUrl = process.env.REACT_APP_PIXABAY_API_URL
const pageSize = 10

export const searchPixabayImages = async (
  keyword: string,
  category: string
) => {
  const params: { [key: string]: string | number | boolean | undefined } = {
    key: apiKey,
    per_page: pageSize,
  }
  if (keyword && keyword !== '') {
    params.q = keyword
  }
  if (category && category !== '') {
    params.category = category
  }
  const response: AxiosResponse<PixabayResponse> = await axios.request({
    url: apiUrl,
    method: 'GET',
    params,
  })
  const images: PixabayImage[] = response.data.hits.map(image => {
    let tags: string[];
    if (image.tags && image.tags !== '') {
      tags = image.tags.split(',');
    }
    else {
      tags = []
    }
    return {...image, tags};
  });
  
  return images
}
