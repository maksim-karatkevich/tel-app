import { Route, Switch } from 'react-router-dom';
import React from 'react';
import ChannelsList from '../features/Chanels/ChannelsList';
import Channel from '../features/Chanels/Channel';
import 'antd/dist/antd.css';

const RoutesResolver = () => {
  return (
    <Switch>
      <Route exact path="/channels" component={ChannelsList} />
      <Route path="/channels/:id" component={Channel} />
    </Switch>
  );
};

export default RoutesResolver;
