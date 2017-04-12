import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import OrdersList from './ordersList';
import { getValidOrders } from './../reducers/root';
import { fetchOrders } from './../actions/orders';

const mapStateToProps = (state, { location }) => {
  return {
    orders: getValidOrders(state, location.pathname),
    isFetching: state.orders.isFetching,
    path: location.pathname,
  }
};

const mapDispatchToProps = dispatch => ({
  fetchOrders: () => dispatch(fetchOrders()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrdersList));
