import { SUBMIT_ORDER_SUCCESS } from '../../constants/orders';

const allIds = (state = [], action) => {
  switch (action.type) {
    case SUBMIT_ORDER_SUCCESS:
      return [...state, action.order.id];
    default:
      return state;
  }
}

export default allIds;
