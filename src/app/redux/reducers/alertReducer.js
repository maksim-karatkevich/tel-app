import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showSuccess: false,
  successMessage: '',
  showError: false,
  errorMessage: '',
};

const alertSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    SHOW_ALERT: (state, action) => {
      return { ...state, ...action.payload };
    },
    RESET_ALERT_STATE: () => initialState,
  },
});

export default alertSlice;
