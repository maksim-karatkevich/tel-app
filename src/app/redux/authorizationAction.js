import controller from '../controller/TelegramController';
import {
  SEND_PHONE,
  SEND_TD_PARAMS,
  SET_AUTHORIZED_STATE,
} from './actionTypes';
import { showErrorAlert } from './alertActions';

export const sendPhoneAction = (phoneNumber) => ({
  type: SEND_PHONE,
  payload: phoneNumber,
});

export const sendTdParamsAction = (tdParams) => ({
  type: SEND_TD_PARAMS,
  params: tdParams,
});

export const setAuthorizedStateAction = (isAuthorized) => ({
  type: SET_AUTHORIZED_STATE,
  payload: isAuthorized,
});

export function sentTdParams() {
  return async (dispatch) => {
    controller.sendTdParameters().then((result) => {
      dispatch(sendTdParamsAction(result));
    });
    controller.send({ '@type': 'checkDatabaseEncryptionKey' });
  };
}

export function initAuthorizeState() {
  return (dispatch) => {
    dispatch(sentTdParams());

    controller.send({ '@type': 'getAuthorizationState' }).then((state) => {
      switch (state['@type']) {
        case 'authorizationStateReady':
          dispatch(setAuthorizedStateAction(true));
          break;
        case 'authorizationStateWaitPhoneNumber':
        case 'authorizationStateWaitCode':
          dispatch(setAuthorizedStateAction(false));
          break;
        default:
          break;
      }
    });
  };
}

export function sendPhoneNumber(phoneNumber) {
  return (dispatch) => {
    dispatch(sendPhoneAction({ phoneNumber, step: '2' }));
    controller
      .send({
        '@type': 'setAuthenticationPhoneNumber',
        phone_number: phoneNumber,
      })
      .then(() => {
        dispatch(sendPhoneAction({ phoneNumber, step: '2' }));
      })
      .catch((error) => {
        dispatch(showErrorAlert(error.message));
      });
  };
}

export function sendCode(code) {
  return async (dispatch) => {
    localStorage.setItem('authorized', 'true');
    dispatch(setAuthorizedStateAction(true));

    controller
      .send({
        '@type': 'checkAuthenticationCode',
        code,
        first_name: 'A',
        last_name: 'B',
      })
      .then(() => {
        localStorage.setItem('authorized', 'true');
        dispatch(setAuthorizedStateAction(true));
      })
      .catch((error) => {
        dispatch(showErrorAlert(error.message));
      });
  };
}
