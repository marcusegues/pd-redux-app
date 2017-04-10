import { combineReducers } from 'redux';
import currencyPairs from 'currencyPairs/index.js'

const rootReducer = combineReducers({
  currencyPairs,
});

export default rootReducer;
