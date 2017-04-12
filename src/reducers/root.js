import { combineReducers } from 'redux';
import currencyPairs from './currencyPairs/index.js';
import orders from './orders/index.js';
import * as fromCurrencyPairs from './currencyPairs/index';

const root = combineReducers({
  currencyPairs,
  orders
});

export default root;

// Selectors
export const getVisibleCurrencyPairs = (state) => {
  return fromCurrencyPairs.getVisibleCurrencyPairs(state.currencyPairs);
}
