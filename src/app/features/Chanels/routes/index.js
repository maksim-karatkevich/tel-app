import { Route, Switch } from 'react-router-dom';
import React from 'react';
import ChannelPageContainer from '../containers/ChannelPageContainer';
import ChannelsListContainer from '../containers/ChannelsListContainer';

const ChannelsRoutes = () => {
  return (
    <Switch>
      <Route exact path="/channels" component={ChannelsListContainer} />
      <Route path="/channels/:id" component={ChannelPageContainer} />
    </Switch>
  );
};

export default ChannelsRoutes;
