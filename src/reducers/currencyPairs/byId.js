import { FETCH_CURRENCY_PAIRS_SUCCESS } from '../../constants/currencyPairs';
import { SUBMIT_ORDER_SUCCESS, FETCH_ORDERS_SUCCESS } from '../../constants/orders';
import { newIdFromCurrencyPair } from '../../util/util';

const getIdFromOrder = (state, order) => {
  // Assumption: backend provides only one version of the currency pair to the frontend
  const ccyPair1 = order.counterCcy + order.investmentCcy;
  const ccyPair2 = order.investmentCcy + order.counterCcy;
  return state[ccyPair1] ? ccyPair1 : ccyPair2;
}

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
  let id;
  switch (action.type) {
    case FETCH_CURRENCY_PAIRS_SUCCESS:
      action.currencyPairs.forEach(cp => {
        id = newIdFromCurrencyPair(cp);
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
    case FETCH_ORDERS_SUCCESS:
      action.orders.forEach(order => {
        id = getIdFromOrder(state, order);
        let newOrders = new Set([...nextState[id].orders]);
        newOrders.add(order.id);
        nextState[id].orders = [...newOrders];
      })
      return nextState;
    default:
      return state;
  }
}

export default byId;
