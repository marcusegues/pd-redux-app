import { connect } from 'react-redux';
import CurrencyPairRowItem from './currencyPairRowItem';

const mapStateToProps = (state, { currencyPair }) => {
  return {
    currencyPair,
  }
};

// const mapDispatchToProps = dispatch => ({
// });

export default connect(
  mapStateToProps,
)(CurrencyPairRowItem);
