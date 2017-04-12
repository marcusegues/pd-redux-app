import { connect } from 'react-redux';
import CurrentOrdersList from './currentOrdersList';
import { getVisibleCurrentOrders } from './../reducers/root';

const mapStateToProps = (state) => {
  return {
    orders: getVisibleCurrentOrders(state)
  }
};

export default connect(
  mapStateToProps,
)(CurrentOrdersList);
