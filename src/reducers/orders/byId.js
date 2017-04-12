import { SUBMIT_ORDER_SUCCESS, FETCH_ORDERS_SUCCESS } from '../../constants/orders';

const getIdFromOrder = (currencyPairsIds, order) => {
  // Assumption: backend provides only one version of the currency pair to the frontend
  const ccyPair1 = order.counterCcy + order.investmentCcy;
  const ccyPair2 = order.investmentCcy + order.counterCcy;
  const ret = ~currencyPairsIds.indexOf(ccyPair1) ? ccyPair1 : ccyPair2;
  console.log(ret)
  debugger;
  return ret;
}

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
      debugger;
      nextState = {};
      action.orders.forEach(order => {
        debugger;
        const id = getIdFromOrder(action.currencyPairsIds, order);
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
