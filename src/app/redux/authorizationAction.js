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

export function initAuthorizeState() {
  return async (dispatch) => {
    const isAuthorized = localStorage.getItem('authorized');
    if (isAuthorized) {
      dispatch(setAuthorizedStateAction(true));
    }
  };
}

export function sendPhoneNumber(phoneNumber) {
  return async (dispatch) => {
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

export function sentTdParams() {
  return async (dispatch) => {
    controller.sendTdParameters().then((result) => {
      controller.send({ '@type': 'checkDatabaseEncryptionKey' });
      dispatch(sendTdParamsAction(result));
    });
  };
}
