import controller from '../controller/TelegramController';
import { showErrorAlert } from './alertActions';
import authorizationSlice from './reducers/authorizationReducer';

export function sentTdParams() {
  return async (dispatch) => {
    controller.sendTdParameters().then((result) => {
      dispatch(authorizationSlice.actions.SEND_TD_PARAMS(result));
    });
    controller.send({ '@type': 'checkDatabaseEncryptionKey' });
  };
}

export function showSpinner(show) {
  return async (dispatch) => {
    dispatch(authorizationSlice.actions.SHOW_SPINNER(show));
  };
}

export function initAuthorizeState() {
  return (dispatch) => {
    dispatch(sentTdParams());
    dispatch(showSpinner(true));
    controller.send({ '@type': 'getAuthorizationState' }).then((state) => {
      switch (state['@type']) {
        case 'authorizationStateReady':
          dispatch(authorizationSlice.actions.SET_AUTHORIZED_STATE(true));
          dispatch(showSpinner(false));
          break;
        case 'authorizationStateWaitPhoneNumber':
        case 'authorizationStateWaitCode':
          dispatch(authorizationSlice.actions.SET_AUTHORIZED_STATE(false));
          dispatch(showSpinner(false));
          break;
        default:
          dispatch(showSpinner(false));
          break;
      }
    });
  };
}

export function sendPhoneNumber(phoneNumber) {
  return (dispatch) => {
    dispatch(authorizationSlice.actions.SEND_PHONE({ phoneNumber, step: '2' }));
    controller
      .send({
        '@type': 'setAuthenticationPhoneNumber',
        phone_number: phoneNumber,
      })
      .then(() => {
        dispatch(
          authorizationSlice.actions.SEND_PHONE({ phoneNumber, step: '2' })
        );
      })
      .catch((error) => {
        dispatch(showErrorAlert(error.message));
      });
  };
}

export function sendCode(code) {
  return async (dispatch) => {
    controller
      .send({
        '@type': 'checkAuthenticationCode',
        code,
        first_name: 'A',
        last_name: 'B',
      })
      .then(() => {
        localStorage.setItem('authorized', 'true');
        dispatch(authorizationSlice.actions.SET_AUTHORIZED_STATE(true));
      })
      .catch((error) => {
        dispatch(showErrorAlert(error.message));
        dispatch(authorizationSlice.actions.SET_AUTHORIZED_STATE(false));
      });
  };
}
