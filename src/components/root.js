import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import MarketOverviewContainer from './marketOverviewContainer';
import OrdersContainer from './ordersContainer';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App} >
        <Route path="/overview" component={MarketOverviewContainer} />
        <Route path="/orders" component={OrdersContainer} />
      </Route>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
window.React = React;
