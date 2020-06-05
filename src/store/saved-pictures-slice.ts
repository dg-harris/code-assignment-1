import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SavedPicturesState {
    [key: number]: PixabayPicture
}
const initialState: SavedPicturesState = {}
const savedPicturesSlice = createSlice({
    name: 'savedPictures',
    initialState,
    reducers: {
        savePicture: (state, action: PayloadAction<PixabayPicture>) => {
            state[action.payload.id] = action.payload;
        },
        removePicture: (state, action: PayloadAction<number>) => {
            delete state[action.payload];
        }
    }
})

export const {
    reducer: savedPicturesReducer,
    actions: {savePicture, removePicture}
} = savedPicturesSlice;