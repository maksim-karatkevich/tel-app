import {
  SET_AUTHORIZED_STATE,
  SEND_PHONE,
  SEND_TD_PARAMS,
  SHOW_SPINNER,
} from '../actionTypes';

const initialState = {
  authorized: false,
  showSpinner: false,
  phone_number: '',
  step: '1',
  tdParams: '',
};

const authorizationState = (state = initialState, action) => {
  switch (action.type) {
    case SEND_TD_PARAMS: {
      return { ...state, tdParams: action.payload };
    }
    case SEND_PHONE: {
      return { ...state, ...action.payload };
    }
    case SET_AUTHORIZED_STATE: {
      return { ...state, authorized: action.payload };
    }
    case SHOW_SPINNER: {
      return { ...state, showSpinner: action.payload };
    }
    default:
      return state;
  }
};

export default authorizationState;
