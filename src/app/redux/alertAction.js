import { SHOW_ALERT } from '../features/Chanels/redux/actionsTypes';

export const showAlertAction = (alert) => ({
  type: SHOW_ALERT,
  payload: alert,
});

function showAlert(alertState) {
  return async (dispatch) => {
    dispatch(showAlertAction(alertState));
    setTimeout(() => {
      dispatch(
        showAlertAction({
          showSuccess: false,
          successMessage: '',
          showError: false,
          errorMessage: '',
        })
      );
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
