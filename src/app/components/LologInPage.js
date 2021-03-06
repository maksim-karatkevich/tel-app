import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Col, Row, Spin } from 'antd';
import { useHistory, useLocation } from 'react-router';
import PhoneStep from './PhoneStep';
import CodeStep from './CodeStep';
import {
  sendPhoneNumber,
  sentTdParams,
  sendCode,
} from '../redux/authorizationAction';
import {
  getAuthorizedState,
  getStep,
  getSpinnerState,
} from '../redux/selector';
import './logInPage.css';
import Logo from './logo.ico';
import './login.css';

const LogInPage = ({
  sendPhoneData,
  sendCodeData,
  step,
  authorized,
  spinnerState,
}) => {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  useEffect(() => {
    if (authorized) {
      history.replace(from);
    }
  }, [from, history, authorized]);

  const submitPhone = ({ phoneNumber }) => {
    sendPhoneData(phoneNumber);
  };

  const submitCode = ({ code }) => {
    sendCodeData(code);
    history.replace(from);
  };

  return !spinnerState ? (
    <Row justify="space-around" align="middle">
      <Col>
        <div className="auth-form">
          <Row>
            <Col offset={5}>
              <img
                className="w-75 pt-5"
                src={Logo}
                alt="https://raw.githubusercontent.com/maksim-karatkevich/tel-app/master/favicon.ico"
              />
            </Col>
          </Row>
          <Row>
            <Col className="mr-auto ml-auto mt-5">
              {step === '1' ? (
                <PhoneStep onSubmitForm={submitPhone} />
              ) : (
                <CodeStep onSubmitForm={submitCode} />
              )}
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  ) : (
    <div className="spinner">
      <Spin size="large" />
    </div>
  );
};

LogInPage.propTypes = {
  sendPhoneData: PropTypes.func.isRequired,
  sendCodeData: PropTypes.func.isRequired,
  step: PropTypes.string.isRequired,
  authorized: PropTypes.bool.isRequired,
  spinnerState: PropTypes.bool.isRequired,
};

const mapDispatchToProps = {
  sendPhoneData: sendPhoneNumber,
  sendCodeData: sendCode,
  sentTdParamsData: sentTdParams,
};

const mapStateToProps = (state) => ({
  step: getStep(state),
  authorized: getAuthorizedState(state),
  spinnerState: getSpinnerState(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);
