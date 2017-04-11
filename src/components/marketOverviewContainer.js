import { connect } from 'react-redux';
import { fetchCurrencyPairs } from './../actions/currencyPairs';
import { getVisibleCurrencyPairs } from './../reducers/root';
import MarketOverview from './marketOverview';

const mapStateToProps = (state, { params }) => ({
  currencyPairs: getVisibleCurrencyPairs(state),
  isFetching: state.currencyPairs.isFetching,
});

const mapDispatchToProps = dispatch => ({
  fetchCurrencyPairs: () => dispatch(fetchCurrencyPairs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MarketOverview);
