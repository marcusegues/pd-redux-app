import { FETCH_CURRENCY_PAIRS_SUCCESS } from '../../constants/currencyPairs';
import { SUBMIT_ORDER_SUCCESS } from '../../constants/orders';
import { newIdFromCurrencyPair } from '../../util/util';

const currencyPair = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CURRENCY_PAIRS_SUCCESS:
      return {
        id: action.id,
        ...action.cp,
        orders: state.orders ? [...state.orders] : []
      }
    case SUBMIT_ORDER_SUCCESS:
      return {
        ...state,
        orders: [...state.orders, action.order.id]
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
        const id = newIdFromCurrencyPair(cp);
        action = {
          ...action,
          cp,
          id
        };
        nextState[id] = currencyPair(state[id], action);
      });
      return nextState;
    case SUBMIT_ORDER_SUCCESS:
      nextState[action.id] = currencyPair(state[action.id], action);
      return nextState;
    default:
      return state;
  }
}

export default byId;
