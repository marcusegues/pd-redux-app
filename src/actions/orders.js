import {
  FETCH_ORDERS_REQUEST,
  FETCH_ORDERS_SUCCESS,
  SUBMIT_ORDER_REQUEST,
  SUBMIT_ORDER_SUCCESS,
  CANCEL_ORDER_REQUEST,
  CANCEL_ORDER_SUCCESS} from '../constants/orders';
import * as api from '../api/index';

const fetchOrdersRequest = () => ({
  type: FETCH_ORDERS_REQUEST,
});

const fetchOrdersSuccess = (orders, currencyPairsIds) => ({
  type: FETCH_ORDERS_SUCCESS,
  orders,
  currencyPairsIds
});

export const fetchOrders = () => {
  return (dispatch, getState) => {
    dispatch(fetchOrdersRequest());
    return api.fetchOrders()
      .then(response => response.json())
      .then(orders => {
        dispatch(fetchOrdersSuccess(orders, getState().currencyPairs.allIds))
      });
  }
}

const submitOrderRequest = () => ({
  type: SUBMIT_ORDER_REQUEST,
});

const submitOrderSuccess = (order, id) => ({
  type: SUBMIT_ORDER_SUCCESS,
  order,
  id,
});

export const submitOrder = (order, id) => {
  return (dispatch) => {
    dispatch(submitOrderRequest());
    return api.submitOrder(order)
      .then(response => {
        return response.json()
      })
      .then(order => {
        dispatch(submitOrderSuccess(order, id))
      });
  }
}

const cancelOrderRequest = () => ({
  type: CANCEL_ORDER_REQUEST,
});

const cancelOrderSuccess = (order) => ({
  type: CANCEL_ORDER_SUCCESS,
  order,
});

export const cancelOrder = (order, id) => {
  return (dispatch) => {
    dispatch(cancelOrderRequest());
    return api.cancelOrder()
      .then(response => response.json())
      .then(order => {
        dispatch(cancelOrderSuccess(order, id))
      });
  }
}
