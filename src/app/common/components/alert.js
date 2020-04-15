import React from 'react';
import { Alert } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './alert.css';

import { getAlertState } from '../../features/Chanels/redux/selector';

const AlertContainer = ({ alertState }) => {
  return (
    <div className="alert-container">
      {alertState.showSuccess && (
        <Alert message={alertState.successMessage} type="success" />
      )}
      {alertState.showError && (
        <Alert message={alertState.errorMessage} type="error" />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  alertState: getAlertState(state),
});

AlertContainer.propTypes = {
  alertState: PropTypes.shape({
    showSuccess: PropTypes.bool,
    successMessage: PropTypes.string,
    showError: PropTypes.bool,
    errorMessage: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps)(AlertContainer);
