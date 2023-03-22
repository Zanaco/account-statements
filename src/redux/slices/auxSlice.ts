import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '../store'

export interface AuxSliceI {
  searchTerm: string
  notifications: number
}

const initialState: AuxSliceI = {
  searchTerm: '',
  notifications: 0,
}

export const auxSlice = createSlice({
  name: 'aux',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
    },
    setNotifications: (state, action: PayloadAction<number>) => {
      state.notifications = action.payload
    },
  },
})

export const {setSearchTerm, setNotifications} = auxSlice.actions

export const selectAux = ({aux}: RootState): AuxSliceI => aux

export default auxSlice.reducer
