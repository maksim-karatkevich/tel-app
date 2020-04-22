export const getAlertState = (store) => store.alertState;
export const getStep = (store) => store.authorizationState.step;
export const getAuthorizedState = (store) =>
  store.authorizationState.authorized;
export const getSpinnerState = (store) => store.authorizationState.showSpinner;
