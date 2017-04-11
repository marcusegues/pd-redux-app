import { FETCH_CURRENCY_PAIRS_REQUEST, FETCH_CURRENCY_PAIRS_SUCCESS } from '../../constants/currencyPairs';

const isFetching = (state = false, action) => {
  switch (action.type) {
    case FETCH_CURRENCY_PAIRS_REQUEST:
      return true;
    case FETCH_CURRENCY_PAIRS_SUCCESS:
      return false;
    default:
      return state;
  }
}

export default isFetching;
