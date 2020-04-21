import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';

const PrivateRoute = ({ children, authorized, ...rest }) => {
  const location = useLocation();
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Route {...rest}>
      {authorized ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        />
      )}
    </Route>
  );
};

PrivateRoute.defaultProps = {
  exact: false,
  children: null,
};

PrivateRoute.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.object,
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  authorized: PropTypes.bool.isRequired,
};

export default PrivateRoute;
