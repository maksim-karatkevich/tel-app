import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Channel from '../Channel';
import ChannelsList from '../ChannelsList';

const ChannelsRoutes = () => {
  return (
    <Switch>
      <Route exact path="/channels" component={ChannelsList} />
      <Route path="/channels/:id" component={Channel} />
    </Switch>
  );
};

export default ChannelsRoutes;
