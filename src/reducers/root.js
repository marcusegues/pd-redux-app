import { combineReducers } from 'redux';
import currencyPairs from './currencyPairs/index.js'
import * as fromCurrencyPairs from './currencyPairs/index'

const root = combineReducers({
  currencyPairs,
});

export default root;

// Selectors
export const getVisibleCurrencyPairs = (state) => {
  return fromCurrencyPairs.getVisibleCurrencyPairs(state.currencyPairs);
}
