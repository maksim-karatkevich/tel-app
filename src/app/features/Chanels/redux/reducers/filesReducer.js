import { createSlice } from '@reduxjs/toolkit';

const fileSlice = createSlice({
  name: 'files',
  initialState: {},
  reducers: {
    GET_AVATARS: (state, action) => {
      return action.payload.reduce((acc, img) => {
        return { ...acc, [img.id]: img.avatar };
      }, {});
    },
  },
});

export default fileSlice;
