import { connect } from 'react-redux';
import CurrencyPairRowItem from './currencyPairRowItem';

const mapStateToProps = (state, { currencyPair }) => {
  return {
    currencyPair,
  }
};

export default connect(
  mapStateToProps,
)(CurrencyPairRowItem);
