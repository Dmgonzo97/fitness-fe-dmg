import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  logInStatus: false
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

// google and research later Vanilla Redux and how to incorporate Redux with APIs at a later date