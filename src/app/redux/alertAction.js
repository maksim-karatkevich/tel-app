import {
  SHOW_ALERT,
  RESET_ALERT_STATE,
} from '../features/Chanels/redux/actionsTypes';

export const showAlertAction = (alert) => ({
  type: SHOW_ALERT,
  payload: alert,
});

export const resetAlertAction = () => ({
  type: RESET_ALERT_STATE,
});

function showAlert(alertState) {
  return async (dispatch) => {
    dispatch(showAlertAction(alertState));
    setTimeout(() => {
      dispatch(resetAlertAction());
    }, 3000);
  };
}

export function showSuccessAlert(message) {
  return async (dispatch) => {
    dispatch(
      showAlert({
        successMessage: message,
        showSuccess: true,
      })
    );
  };
}

export function showErrorAlert(message) {
  return async (dispatch) => {
    dispatch(
      showAlert({
        errorMessage: message,
        showError: true,
      })
    );
  };
}