/* eslint-disable react/prop-types */

import React from 'react';

const App = props => (
  <div>
    <h1>Bienvenue sur LaGrowthMachine</h1>
    {props.children}
  </div>
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
