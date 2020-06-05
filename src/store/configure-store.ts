import { configureStore } from '@reduxjs/toolkit'
import appReducer from './app-reducer'

export default configureStore({ reducer: appReducer })
