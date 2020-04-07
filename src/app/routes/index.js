import { Link, Route, Switch } from 'react-router-dom';
import React from 'react';
import ChannelsList from '../features/Chanels/ChannelsList';
import Channel from '../features/Chanels/Channel';
import 'antd/dist/antd.css';

const Routes = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary d-block">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <Link className="navbar-brand" to="/channels">
          Channels
        </Link>
      </nav>
      <Switch>
        <Route exact path="/channels" component={ChannelsList} />
        <Route path="/channels/:id" component={Channel} />
      </Switch>
    </div>
  );
};

export default Routes;
