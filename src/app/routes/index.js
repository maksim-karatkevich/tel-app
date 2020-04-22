import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import ChannelsListContainer from '../features/Chanels/containers/ChannelsListContainer';
import 'antd/dist/antd.css';
import LogInPage from '../components/LologInPage';
import PrivateRoute from './PrivateRoute';
import ChannelPageContainer from '../features/Chanels/containers/ChannelPageContainer';
import Home from '../common/components/Home';

const RoutesResolver = ({ authorized }) => {
  return (
    <Switch>
      <PrivateRoute exact path="/" authorized={authorized}>
        <Home />
      </PrivateRoute>
      <PrivateRoute exact path="/channels" authorized={authorized}>
        <ChannelsListContainer />
      </PrivateRoute>
      <PrivateRoute
        path="/channels/:id"
        authorized={authorized}
        render={(props) => <ChannelPageContainer {...props} />}
      />
      <Route path="/login" component={LogInPage} />
    </Switch>
  );
};

RoutesResolver.propTypes = {
  authorized: PropTypes.bool.isRequired,
};

export default RoutesResolver;
