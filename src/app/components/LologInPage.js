import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import PhoneStep from './PhoneStep';
import CodeStep from './CodeStep';
import {
  sendPhoneNumber,
  sentTdParams,
  sendCode,
} from '../redux/authorizationAction';
import { getStep } from '../redux/selector';
import './logInPage.css';
import Logo from './logo.ico';

const LogInPage = ({ sendPhoneData, sendCodeData, sentTdParamsData, step }) => {
  useEffect(() => {
    sentTdParamsData();
  }, [sentTdParamsData]);

  const submitPhone = ({ phoneNumber }) => {
    sendPhoneData(phoneNumber);
  };

  const submitCode = ({ code }) => {
    sendCodeData(code);
  };

  return (
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
  );
};

LogInPage.propTypes = {
  sendPhoneData: PropTypes.func.isRequired,
  sendCodeData: PropTypes.func.isRequired,
  sentTdParamsData: PropTypes.func.isRequired,
  step: PropTypes.string.isRequired,
};

const mapDispatchToProps = {
  sendPhoneData: sendPhoneNumber,
  sendCodeData: sendCode,
  sentTdParamsData: sentTdParams,
};

const mapStateToProps = (state) => ({
  step: getStep(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);
