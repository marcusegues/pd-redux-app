import { SUBMIT_ORDER_SUCCESS, FETCH_ORDERS_SUCCESS } from '../../constants/orders';

const allIds = (state = [], action) => {
  switch (action.type) {
    case SUBMIT_ORDER_SUCCESS:
      return [...state, action.order.id];
    case FETCH_ORDERS_SUCCESS:
      return action.orders.map(order => order.id);
    default:
      return state;
  }
}

export default allIds;
