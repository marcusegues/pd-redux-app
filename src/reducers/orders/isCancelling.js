import { CANCEL_ORDER_REQUEST, CANCEL_ORDER_SUCCESS } from '../../constants/orders';

const isCancelling = (state = false, action) => {
  switch (action.type) {
    case CANCEL_ORDER_REQUEST:
      return true;
    case CANCEL_ORDER_SUCCESS:
      return false;
    default:
      return state;
  }
}

export default isCancelling;
