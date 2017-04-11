import {
  FETCH_ORDERS_REQUEST,
  FETCH_ORDERS_SUCCESS,
  SUBMIT_ORDER_REQUEST,
  SUBMIT_ORDER_SUCCESS,
  CANCEL_ORDER_REQUEST,
  CANCEL_ORDER_SUCCESS} from '../constants/orders';

export const fetchOrdersRequest = () => ({
  type: FETCH_ORDERS_REQUEST,
});

export const fetchOrdersSuccess = (orders) => ({
  type: FETCH_ORDERS_SUCCESS,
  orders,
});

export const fetchOrders = () => {
  return (dispatch) => {
    dispatch(fetchOrdersRequest);
    return api.fetchOrders()
      .then(response => response.json())
      .then(orders => {
        dispatch(fetchOrdersSuccess(orders))
      });
  }
}

export const submitOrderRequest = () => ({
  type: SUBMIT_ORDER_REQUEST,
});

export const submitOrderSuccess = (order) => ({
  type: SUBMIT_ORDER_SUCCESS,
  order,
});

export const submitOrder = () => {
  return (dispatch) => {
    dispatch(submitOrderRequest);
    return api.submitOrder()
      .then(response => response.json())
      .then(order => {
        dispatch(submitOrderSuccess(order))
      });
  }
}

export const cancelOrderRequest = () => ({
  type: CANCEL_ORDER_REQUEST,
});

export const cancelOrderSuccess = (order) => ({
  type: CANCEL_ORDER_SUCCESS,
  order,
});

export const cancelOrder = () => {
  return (dispatch) => {
    dispatch(cancelOrderRequest);
    return api.cancelOrder()
      .then(response => response.json())
      .then(order => {
        dispatch(cancelOrderSuccess(order))
      });
  }
}
