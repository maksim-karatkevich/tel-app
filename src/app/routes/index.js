import { Route, Switch } from 'react-router-dom';
import React from 'react';
import ChannelsListContainer from '../features/Chanels/containers/ChannelsListContainer';
import ChannelPageContainer from '../features/Chanels/containers/ChannelPageContainer';
import 'antd/dist/antd.css';

const RoutesResolver = () => {
  return (
    <Switch>
      <Route exact path="/channels" component={ChannelsListContainer} />
      <Route path="/channels/:id" component={ChannelPageContainer} />
    </Switch>
  );
};

export default RoutesResolver;
