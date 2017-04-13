import { connect } from 'react-redux';
import { fetchOrders } from './../actions/orders';
import { fetchCurrencyPairs } from './../actions/currencyPairs';
import MarketOverview from './marketOverview';

const mapStateToProps = (state, { params }) => ({

});

const mapDispatchToProps = dispatch => ({
  fetchCurrencyPairs: () => dispatch(fetchCurrencyPairs()),
  fetchOrders: () => dispatch(fetchOrders()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MarketOverview);
