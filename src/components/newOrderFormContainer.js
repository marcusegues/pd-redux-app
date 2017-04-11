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
  submitOrder: (order, id) => dispatch(submitOrder(order, id)),
  cancelOrder: (order, id) => dispatch(cancelOrder(order, id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewOrderForm);
