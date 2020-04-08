import { Switch } from 'react-router-dom';
import React from 'react';
import ChannelsRoutes from '../features/Chanels/routes';

const RoutesResolver = () => {
  return (
    <Switch>
      <ChannelsRoutes />
    </Switch>
  );
};

export default RoutesResolver;
