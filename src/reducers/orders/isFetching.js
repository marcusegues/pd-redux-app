import { FETCH_ORDERS_REQUEST, FETCH_ORDERS_SUCCESS } from '../../constants/orders';

const isFetching = (state = false, action) => {
  switch (action.type) {
    case FETCH_ORDERS_REQUEST:
      return true;
    case FETCH_ORDERS_SUCCESS:
      return false;
    default:
      return state;
  }
}

export default isFetching;
