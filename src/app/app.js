import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './header';
import RoutesResolver from './routes/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import '../index.css';
import controller from './controller/TelegramController';
import { getAuthorizedState } from './redux/selector';
import { initAuthorizeState } from './redux/authorizationAction';

const App = ({ authorized, dispatchAuthorizeState }) => {
  useEffect(() => {
    controller.init();
    dispatchAuthorizeState();
  }, [dispatchAuthorizeState]);

  return (
    <Router>
      {authorized && <Header />}
      <RoutesResolver authorized={authorized} />
    </Router>
  );
};

const mapStateToProps = (state) => ({
  authorized: getAuthorizedState(state),
});

const mapDispatchToProps = {
  dispatchAuthorizeState: initAuthorizeState,
};

App.propTypes = {
  authorized: PropTypes.bool.isRequired,
  dispatchAuthorizeState: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
