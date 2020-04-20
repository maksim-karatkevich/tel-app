import { RESET_ALERT_STATE, SHOW_ALERT } from '../actionTypes';

const initialState = {
  showSuccess: false,
  successMessage: '',
  showError: false,
  errorMessage: '',
};

const alertState = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT: {
      return { ...state, ...action.payload };
    }
    case RESET_ALERT_STATE: {
      return initialState;
    }
    default:
      return state;
  }
};

export default alertState;
