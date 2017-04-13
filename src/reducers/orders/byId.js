import { SUBMIT_ORDER_SUCCESS, FETCH_ORDERS_SUCCESS, CANCEL_ORDER_SUCCESS } from '../../constants/orders';
import omit from 'lodash/omit';

const getIdFromOrder = (currencyPairsIds, order) => {
  // Assumption: backend provides only one version of the currency pair to the frontend
  const ccyPair1 = order.counterCcy + order.investmentCcy;
  const ccyPair2 = order.investmentCcy + order.counterCcy;
  return ~currencyPairsIds.indexOf(ccyPair1) ? ccyPair1 : ccyPair2;
}

const byId = (state = {}, action) => {
  let nextState = {...state};
  switch (action.type) {
    case SUBMIT_ORDER_SUCCESS:
      nextState[action.order.id] = {
        ...action.order,
        currencyId: action.id,
      }
      return nextState;
    case CANCEL_ORDER_SUCCESS:
      return omit(state, [action.order.id]);
    case FETCH_ORDERS_SUCCESS:
      nextState = {};
      action.orders.forEach(order => {
        const id = getIdFromOrder(action.currencyPairsIds, order);
        nextState[order.id] = {
          ...order,
          currencyId: id,
        }
      })
      return nextState;
    default:
      return state;
  }
}

export default byId;
