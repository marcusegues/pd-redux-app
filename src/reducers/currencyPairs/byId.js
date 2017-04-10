import { FETCH_CURRENCY_PAIRS_SUCCESS } from '../../constants/currencyPairs';
import { newIdFromCurrencyPair } from '../../util/util';

const currencyPair = (state, action) => {
  switch (action.type) {
    case FETCH_CURRENCY_PAIRS_SUCCESS:
      return {
        ...state,
        orders: state.orders ? [...state.orders] : []
      }
  }
}

const byId = (state = {}, action) => {
  const nextState = {...state};
  switch (action.type) {
    case FETCH_CURRENCY_PAIRS_SUCCESS:
      action.currencyPairs.forEach(cp => {
        let id = newIdFromCurrencyPair(cp);
        nextState[id] = currencyPair(state[id], action);
      });
      return nextState;
    default:
      return state;
  }
}

export default byId;
