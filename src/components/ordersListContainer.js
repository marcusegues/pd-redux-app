import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import OrdersList from './ordersList';
import { getValidOrders } from './../reducers/root';

const mapStateToProps = (state, { location }) => {
  return {
    orders: getValidOrders(state, location.pathname)
  }
};

export default withRouter(connect(
  mapStateToProps,
)(OrdersList));
