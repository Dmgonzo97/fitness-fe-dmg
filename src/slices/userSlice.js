import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: '',
  username: '',
  blogs: []
}

export const userSlice = createSlice({
  name: 'user',

  initialState,

  reducers: {
    setUserDetails: (state, action) => {
      state.username = action.payload.username;
      state.id = action.payload.id;
      state.blogs = action.payload.blogs;
    }
  },
})

export const { setUserDetails } = userSlice.actions

export default userSlice.reducer


// state.Id = action.payload.id,
// state.Blogs = action.payload.blogs