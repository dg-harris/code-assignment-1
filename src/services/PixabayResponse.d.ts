export type PixabayResponseImage = Omit<PixabayImage, 'tags'> & {tags: string}
export interface PixabayResponse {
  total: number
  totalHits: number
  hits: PixabayResponseImage[]
}
