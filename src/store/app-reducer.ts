import { combineReducers } from '@reduxjs/toolkit'
import { savedPicturesReducer } from './saved-pictures-slice'

const reducers = {
  savedPictures: savedPicturesReducer,
}
const appReducer = combineReducers(reducers)
export type AppState = ReturnType<typeof appReducer>

export default appReducer
