/**
 * Created by thomasjeanneau on 07/02/2017.
 */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from '../../ui/layouts/App.jsx';
import Dashboard from '../../ui/pages/Dashboard.jsx';
import lgmTheme from '../../ui/constants/lgmTheme';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const Root = () => (
  <Router history={browserHistory}>
    <MuiThemeProvider muiTheme={getMuiTheme(lgmTheme)}>
      <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />
      </Route>
    </MuiThemeProvider>
  </Router>
);

Meteor.startup(() => {
  render(<Root />, document.getElementById('root'));
});
