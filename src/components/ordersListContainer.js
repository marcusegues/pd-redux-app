import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import OrdersList from './ordersList';
import { getValidOrders } from './../reducers/root';
import { getOrdersByCurrencyId } from './../reducers/root';
import { getOrdersListTitle } from './../util/util';
import { fetchOrders } from './../actions/orders';
import { fetchCurrencyPairs } from './../actions/currencyPairs';

const mapStateToProps = (state, { location, params }) => {
  const ret = params.currency ? getOrdersByCurrencyId(state, params.currency.toUpperCase()) : getValidOrders(state, location.pathname);
  return {
    orders: ret,
    isFetching: state.orders.isFetching,
    title: getOrdersListTitle(location.pathname, params),
    currencyPairsFetched: state.userInterface.currencyPairsFetched,
    path: location.pathname,
  }
};

const mapDispatchToProps = dispatch => ({
  fetchCurrencyPairs: () => dispatch(fetchCurrencyPairs()),
  fetchOrders: () => dispatch(fetchOrders()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrdersList));
