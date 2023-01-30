import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  logInStatus: true
}

export const authSlice = createSlice({
  name: 'auth',

  initialState,

  reducers: {
    setLogInStatus: (state, action) => {
      state.logInStatus = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setLogInStatus } = authSlice.actions

export default authSlice.reducer