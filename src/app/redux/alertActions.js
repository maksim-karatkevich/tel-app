import alertSlice from './reducers/alertReducer';

function resetAlertState() {
  return async (dispatch) => {
    setTimeout(() => {
      dispatch(alertSlice.actions.RESET_ALERT_STATE());
    }, 3000);
  };
}

export function showSuccessAlert(message) {
  return async (dispatch) => {
    dispatch(
      alertSlice.actions.SHOW_ALERT({
        successMessage: message,
        showSuccess: true,
      })
    );
    dispatch(resetAlertState());
  };
}

export function showErrorAlert(message) {
  return async (dispatch) => {
    dispatch(
      alertSlice.actions.SHOW_ALERT({
        errorMessage: message,
        showError: true,
      })
    );
    dispatch(resetAlertState());
  };
}
