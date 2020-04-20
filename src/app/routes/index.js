import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import ChannelsListContainer from '../features/Chanels/containers/ChannelsListContainer';
import ChannelPageContainer from '../features/Chanels/containers/ChannelPageContainer';
import 'antd/dist/antd.css';
import LogInPage from '../components/LologInPage';

const RoutesResolver = ({ authorized }) => {
  return authorized ? (
    <Switch>
      <Route exact path="/channels" component={ChannelsListContainer} />
      <Route path="/channels/:id" component={ChannelPageContainer} />
    </Switch>
  ) : (
    <LogInPage />
  );
};

RoutesResolver.propTypes = {
  authorized: PropTypes.bool.isRequired,
};

export default RoutesResolver;
