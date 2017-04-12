import { combineReducers } from 'redux';
import byId from './byId';
import allIds from './allIds';
import isSubmitting from './isSubmitting';
import isCancelling from './isCancelling';
import isFetching from './isFetching';
import { OVERVIEW, ORDERS } from './../../constants/routes';
import moment from 'moment';

const orders = combineReducers({
  byId,
  allIds,
  isFetching,
  isSubmitting,
  isCancelling,
});

export default orders;

// Selectors
export const getAllOrders = (state) => {
  return state.allIds.map(id => state.byId[id]);
}

export const getValidOrders = (state, location, params) => {
  const allOrders = getAllOrders(state);
  switch (location) {
    case OVERVIEW:
      return allOrders.filter(order => moment(order.validUntil) >= moment(moment().format("YYYY-MM-DD")));
    case ORDERS:
    default:
      return allOrders;
  }
}

export const getOrdersByOrderIds = (state, orderIds) => {
  return orderIds.map(id => state.byId[id]);
}

export const getOrdersByCurrencyId = (state, currencyId) => {
  return state.allIds.reduce((accum, id) => {
    const order = state.byId[id];
    if (order.currencyId === currencyId) {
      accum.push(order)
    }
    return accum;
  }, []);
}
