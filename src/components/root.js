import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import App from './App';
import MarketOverview from './marketOverview';
import OrdersListContainer from './ordersListContainer';
import CurrencyView from './currencyView';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App} >
        <Redirect from="/" to="/overview" />
        <Route path="/overview" component={MarketOverview} />
        <Route path="/orders" component={OrdersListContainer} />
        <Route path='/currencies/:currency' component={CurrencyView} />
      </Route>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
