import { connect } from 'react-redux';
import NewOrderForm from './newOrderForm';
import { submitOrder, cancelOrder } from '../actions/orders';

const mapStateToProps = (state, { id, type, initialPrice}) => {
  return {
    id,
    type,
    initialPrice,
  }
};

const mapDispatchToProps = dispatch => ({
  submitOrder: () => dispatch(submitOrder),
  cancelOrder: () => dispatch(cancelOrder),
});

export default connect(
  mapStateToProps,
)(NewOrderForm);
