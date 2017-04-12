import { combineReducers } from 'redux';
import byId from './byId';
import allIds from './allIds';
import isSubmitting from './isSubmitting';
import isCancelling from './isCancelling';
import isFetching from './isFetching';
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

export const getValidOrders = (state, location) => {
  const allOrders = getAllOrders(state);
  switch (location) {
    case '/overview':
      return allOrders.filter(order => moment(order.validUntil) >= moment(moment().format("YYYY-MM-DD")));
    default:
      return allOrders;
  }
}
