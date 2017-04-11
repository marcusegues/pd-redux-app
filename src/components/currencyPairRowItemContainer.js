import { connect } from 'react-redux';
import CurrencyPairRowItem from './currencyPairRowItem';
import { submitOrder, cancelOrder } from '../actions/orders';

const mapStateToProps = (state, { currencyPair }) => {
  return {
    currencyPair,
  }
};

const mapDispatchToProps = dispatch => ({
  submitOrder: () => dispatch(submitOrder),
  cancelOrder: () => dispatch(cancelOrder),
});

export default connect(
  mapStateToProps,
)(CurrencyPairRowItem);
