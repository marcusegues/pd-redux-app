import { FETCH_CURRENCY_PAIRS_SUCCESS } from './../../constants/currencyPairs';
import { FETCH_ORDERS_SUCCESS } from './../../constants/orders';

const userInterface = (state = {
  currencyPairsFetched: false,
  ordersFetched: false,
}, action) => {
  switch (action.type) {
    case FETCH_CURRENCY_PAIRS_SUCCESS:
      return {
        ...state,
        currencyPairsFetched: true,
      }
    case FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        ordersFetched: true,
      }
    default:
      return state;
  }
}

export default userInterface;
