import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    GET_POSTS: (state, action) => [...state, action.payload],
  },
});

export default postsSlice;
