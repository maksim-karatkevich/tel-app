import { SHOW_ALERT } from '../../features/Chanels/redux/actionsTypes';

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
    default:
      return state;
  }
};

export default alertState;
