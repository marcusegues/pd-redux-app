import { FETCH_CURRENCY_PAIRS_SUCCESS } from '../../constants/currencyPairs';
import { newIdFromCurrencyPair } from '../../util/util';

const allIds = (state = [], action) => {
  switch (action.type) {
    case FETCH_CURRENCY_PAIRS_SUCCESS:
      const newState = new Set([...state]);
      action.currencyPairs.forEach(cp => {
        let id = newIdFromCurrencyPair(cp);
        newState.add(id);
      });
      return [...newState];
    default:
      return state;
  }
}

export default allIds;
