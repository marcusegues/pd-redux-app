import { OVERVIEW, ORDERS } from './../constants/routes';

export const newIdFromCurrencyPair = cp => cp.ccyPair.ccy1 + cp.ccyPair.ccy2;

export const getOrdersListTitle = (location, params) => {
  switch (location) {
    case OVERVIEW:
      return 'Outstanding Valid Orders';
    case ORDERS:
      return 'All Orders';
    default:
      return params.currency.toUpperCase();
  }
}
