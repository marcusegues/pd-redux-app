import { SUBMIT_ORDER_REQUEST, SUBMIT_ORDER_SUCCESS } from '../../constants/orders';

const isSubmitting = (state = false, action) => {
  switch (action.type) {
    case SUBMIT_ORDER_REQUEST:
      return true;
    case SUBMIT_ORDER_SUCCESS:
      return false;
    default:
      return state;
  }
}

export default isSubmitting;
