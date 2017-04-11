import { FETCH_CURRENCY_PAIRS_REQUEST, FETCH_CURRENCY_PAIRS_SUCCESS } from '../constants/currencyPairs';
import * as api from '../api/index';

export const fetchCurrencyPairsRequest = () => ({
  type: FETCH_CURRENCY_PAIRS_REQUEST,
});

export const fetchCurrencyPairsSuccess = (currencyPairs) => ({
  type: FETCH_CURRENCY_PAIRS_SUCCESS,
  currencyPairs,
});

export const fetchCurrencyPairs = () => {
  return (dispatch) => {
    dispatch(fetchCurrencyPairsRequest);
    return api.fetchCurrencyPairs()
      .then(response => response.json())
      .then(currencyPairs => {
        dispatch(fetchCurrencyPairsSuccess(currencyPairs))
      });
  }
}


window.fetchCurrencyPairs = fetchCurrencyPairs;
