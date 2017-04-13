import { SUBMIT_ORDER_SUCCESS, FETCH_ORDERS_SUCCESS, CANCEL_ORDER_SUCCESS } from '../../constants/orders';

const allIds = (state = [], action) => {
  switch (action.type) {
    case SUBMIT_ORDER_SUCCESS:
      return [...state, action.order.id];
    case CANCEL_ORDER_SUCCESS:
      const index = state.indexOf(action.order.id);
      if (~index) {
        return [...state.slice(0, index), ...state.slice(index+1)];
      } else {
        return state;
      }
    case FETCH_ORDERS_SUCCESS:
      return action.orders.map(order => order.id);
    default:
      return state;
  }
}

export default allIds;
