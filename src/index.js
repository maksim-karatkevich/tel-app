import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <App />;
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
