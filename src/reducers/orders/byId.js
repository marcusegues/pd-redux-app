import { SUBMIT_ORDER_SUCCESS, FETCH_ORDERS_SUCCESS } from '../../constants/orders';

const byId = (state = {}, action) => {
  let nextState = {...state};
  switch (action.type) {
    case SUBMIT_ORDER_SUCCESS:
      nextState[action.order.id] = {
        ...action.order,
        currencyId: action.id,
        fulfilled: true,
      }
      return nextState;
    case FETCH_ORDERS_SUCCESS:
      nextState = {};
      action.orders.forEach(order => {
        const id = getIdFromOrder(state, order);
        nextState[order.id] = {
          ...order,
          currencyId: id,
          fulfilled: true,
        }
      })
      return nextState;
    default:
      return state;
  }
}

export default byId;

const getIdFromOrder = (state, order) => {
  // Assumption: backend provides only one version of the currency pair to the frontend
  const ccyPair1 = order.counterCcy + order.investmentCcy;
  const ccyPair2 = order.investmentCcy + order.counterCcy;
  return state[ccyPair1] ? ccyPair1 : ccyPair2;
}
