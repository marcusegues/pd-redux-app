import { FETCH_CURRENCY_PAIRS_SUCCESS } from '../../constants/currencyPairs';
import { newIdFromCurrencyPair } from '../../util/util';

const currencyPair = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CURRENCY_PAIRS_SUCCESS:
      return {
        id: action.id,
        ...action.cp,
        orders: state.orders ? [...state.orders] : []
      }
    default:
      return state;
  }
}

const byId = (state = {}, action) => {
  const nextState = {...state};
  switch (action.type) {
    case FETCH_CURRENCY_PAIRS_SUCCESS:
      action.currencyPairs.forEach(cp => {
        let id = newIdFromCurrencyPair(cp);
        action = {
          ...action,
          cp,
          id
        };
        nextState[id] = currencyPair(cp, action);
      });
      return nextState;
    default:
      return state;
  }
}

export default byId;
