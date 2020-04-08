import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './header';
import RoutesResolver from './routes/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

const App = () => {
  return (
    <Router>
      <Header />
      <RoutesResolver />
    </Router>
  );
};

export default App;
