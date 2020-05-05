import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authorized: false,
  showSpinner: false,
  phone_number: '',
  step: '1',
  tdParams: '',
};

const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    SEND_TD_PARAMS: (state, action) => {
      return { ...state, tdParams: action.payload };
    },
    SEND_PHONE: (state, action) => {
      return { ...state, ...action.payload };
    },
    SET_AUTHORIZED_STATE: (state, action) => {
      return { ...state, authorized: action.payload };
    },
    SHOW_SPINNER: (state, action) => {
      return { ...state, showSpinner: action.payload };
    },
  },
});

export default authorizationSlice;
