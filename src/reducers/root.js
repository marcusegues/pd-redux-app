import { combineReducers } from 'redux';
import currencyPairs from './currencyPairs/index';
import orders from './orders/index';
import userInterface from './userInterface/index';
import * as fromCurrencyPairs from './currencyPairs/index';
import * as fromOrders from './orders/index';

const root = combineReducers({
  currencyPairs,
  orders,
  userInterface,
});

export default root;

// Selectors
export const getVisibleCurrencyPairs = (state) => {
  return fromCurrencyPairs.getVisibleCurrencyPairs(state.currencyPairs);
}

export const getValidOrders = (state, location) => {
  return fromOrders.getValidOrders(state.orders, location);
}

export const getOrdersByCurrencyId = (state, currencyId) => {
  let orderIds = [];
  if (state.userInterface.currencyPairsFetched) {
    orderIds = fromCurrencyPairs.getOrdersById(state.currencyPairs, currencyId);
    return fromOrders.getOrdersByOrderIds(state.orders, orderIds);
  } else {
    return fromOrders.getOrdersByCurrencyId(state.orders, currencyId);
  }
}
