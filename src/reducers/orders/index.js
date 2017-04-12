import { combineReducers } from 'redux';
import byId from './byId';
import allIds from './allIds';
import isSubmitting from './isSubmitting';
import isCancelling from './isCancelling';
import isFetching from './isFetching';

const orders = combineReducers({
  byId,
  allIds,
  isFetching,
  isSubmitting,
  isCancelling,
});

export default orders;
