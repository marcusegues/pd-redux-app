import { combineReducers } from 'redux';
import byId from './byId';
import allIds from './allIds';
import isFetching from './isFetching';

const currencyPairs = combineReducers({
  byId,
  allIds,
  isFetching,
});

export default currencyPairs;
