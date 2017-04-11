import { connect } from 'react-redux';
import NewOrderForm from './newOrderForm';
import { submitOrder, cancelOrder } from '../actions/orders';

const mapStateToProps = (state, { id, ccyPair, type, initialPrice, handleCancelOrder }) => {
  return {
    id,
    ccyPair,
    type,
    initialPrice,
    handleCancelOrder,
  }
};

const mapDispatchToProps = dispatch => ({
  submitOrder: (order) => dispatch(submitOrder(order)),
  cancelOrder: (order) => dispatch(cancelOrder(order)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewOrderForm);
