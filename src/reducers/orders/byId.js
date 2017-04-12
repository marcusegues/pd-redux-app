import { SUBMIT_ORDER_SUCCESS } from '../../constants/orders';

const byId = (state = {}, action) => {
  const nextState = {...state};
  switch (action.type) {
    case SUBMIT_ORDER_SUCCESS:
      nextState[action.order.id] = {
        ...action.order,
        currencyId: action.id,
        fulfilled: true,
      }
      return nextState;
    default:
      return state;
  }
}

export default byId;
