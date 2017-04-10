import * from '../constants/currencyPairs';

export const FetchCurrencyPairsRequest = () => ({
  type: FETCH_CURRENCY_PAIRS_REQUEST,
});

export const FetchCurrencyPairsSuccess = (currencyPairs) => ({
  type: FETCH_CURRENCY_PAIRS_SUCCESS,
  currencyPairs,
});

export const FetchCurrencyPairs = () => {
  return (dispatch) => {
    dispatch(FetchCurrencyPairsRequest);
    return api.fetchCurrencyPairs()
      .then(response => response.json())
      .then(currencyPairs => {
        dispatch(FetchCurrencyPairsSuccess(currencyPairs))
      });
  }
}
