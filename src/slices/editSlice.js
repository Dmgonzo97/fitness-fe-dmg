import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editMode: false
}

export const editSlice = createSlice({
  name: 'edit',

  initialState,

  reducers: {
    setEditModeStatus: (state, action) => {
      state.editMode = action.payload
    },
  },
})

export const { setEditModeStatus } = editSlice.actions

export default editSlice.reducer