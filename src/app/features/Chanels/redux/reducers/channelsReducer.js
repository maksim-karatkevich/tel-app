import { createSlice } from '@reduxjs/toolkit';

const channelsSlice = createSlice({
  name: 'channels',
  initialState: [],
  reducers: {
    GET_CHANNELS: (state, action) => action.payload,
    ADD_CHANNEL: (state) => state,
  },
});

export default channelsSlice;
