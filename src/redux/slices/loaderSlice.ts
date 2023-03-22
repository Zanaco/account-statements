import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '../store'

export interface ModalSliceI {
  isLoading: boolean
  isError: boolean
}

const initialState: ModalSliceI = {
  isLoading: false,
  isError: false,
}

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setError: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload
    },
  },
})

export const {setLoading, setError} = loaderSlice.actions

export const selectModal = ({loader}: RootState): ModalSliceI => loader

export default loaderSlice.reducer
