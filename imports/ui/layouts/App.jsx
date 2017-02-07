/* eslint-disable react/prop-types */

import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import '../stylesheets/app.scss';
import lgmTheme from '../../ui/constants/lgmTheme';

const App = props => (
  <MuiThemeProvider muiTheme={getMuiTheme(lgmTheme)}>
    <div>
      <AppBar title={<span>Boilerplate</span>} />
      <div className="container">
        {props.children}
      </div>
    </div>
  </MuiThemeProvider>
);

App.PropTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
};

App.DefaultProps = {
  children: null,
};

export default App;
