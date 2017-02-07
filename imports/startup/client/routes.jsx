/**
 * Created by thomasjeanneau on 07/02/2017.
 */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from '../../ui/layouts/App.jsx';
import Dashboard from '../../ui/pages/Dashboard.jsx';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const Root = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
    </Route>
  </Router>
);

Meteor.startup(() => {
  render(<Root />, document.getElementById('root'));
});
